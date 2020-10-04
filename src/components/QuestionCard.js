import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleQuestionAnswer } from '../actions/shared'
import ErrorPage from './ErrorPage'

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
    
    const authorId = question ? question.author : null
    const author = authorId ? users[authorId] : null

    if (!question || !author) {
      return <ErrorPage />
    }
 
    const { optSelected, submitted } = this.state

    // console.log('QuestionCard qid:', qid)
    // console.log('QuestionCard optSelected:', 
    // optSelected)
    
    if (submitted) {
        return <Redirect 
        to={{
          pathname: `/answer/:${question.id}`,
          state: { qid: question.id, optSelected, }
        }} 
        />
    }

    return (
      <div>
        <div className='poll-card'>
        <img
          src={author ? author.avatarURL : null}
          alt={`Avatar of ${author ? author.name : null}`}
          className='avatar' />
        <div className='poll-info'>
          <div>
            <span>{author ? author.name : null} asks</span>
            <div className='poll-info center'>
              <h4>Would you rather ...</h4>
              <form onSubmit={this.handleSubmit}>
                <div className='poll-options-align'>
                  <label>
                    <input 
                      type='radio' name='poll-options' value='optionOne'
                      onChange={(e) => this.handleOptionChange(e)}
                      
                    />
                    {question ? question.optionOne.text : null}
                  </label>
                </div>
                
                <div className='poll-options-align'>
                  <label>
                    <input 
                    type='radio' name='poll-options' value='optionTwo'
                    onChange={(e) => this.handleOptionChange(e)}
                  />
                    {question ? question.optionTwo.text : null}
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