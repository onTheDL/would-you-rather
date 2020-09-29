import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleQuestionAnswer } from '../actions/shared'

class QuestionCard extends React.Component {
  state = {
    optSelected: '',
    submitted: false,
  }

  handleOptionChange = (e) => {
    this.setState({
      optSelected: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const answer = this.state.optSelected
    const qid = this.props.match.params.id
    const { dispatch, authedUser } = this.props

    dispatch(handleQuestionAnswer({ authedUser, qid, answer }))

    this.setState({
      submitted: true,
    })
  }

  render() {

    console.log('QuestionCard Props', this.props)
    const qid = this.props.match.params.id
    const { questions, users } = this.props

    const question = questions[qid]
    const authorId = question.author
    const author = users[authorId]

    const { optionOne, optionTwo, id } = question
    const { avatarURL, name } = author

    

    // if question poll not found, return error message
    if (!question) {
      return <p>This poll does not exist.</p>
    }

    const { optSelected, submitted } = this.state

    console.log('QuestionCard qid:', qid)
    console.log('QuestionCard optSelected:', 
    optSelected)
    
    if (submitted) {
      return <Redirect 
        to={{
          pathname: `/answers/${id}`,
          state: { qid: id, optSelected, }
        }} 
        />
    }

    return (
      <div>
        <div className='poll-card'>
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar' />
        <div className='poll-info'>
          <div>
            <span>{name} asks</span>
            <div className='poll-info center'>
              <h4>Would you rather ...</h4>
              <form onSubmit={this.handleSubmit}>
                <div className='poll-options-align'>
                  <label>
                    <input 
                      type='radio' name='poll-options' value='optionOne'
                      onChange={(e) => this.handleOptionChange(e)}
                      
                    />
                    {optionOne.text}
                  </label>
                </div>
                
                <div className='poll-options-align'>
                  <label>
                    <input 
                    type='radio' name='poll-options' value='optionTwo'
                    onChange={(e) => this.handleOptionChange(e)}
                  />
                    {optionTwo.text}
                  </label>
                </div>
                <button className='btn' type='submit'>Save</button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    )
    
  }
  
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  }
}

export default connect(mapStateToProps)(QuestionCard)