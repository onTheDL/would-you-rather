import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ErrorPage from './ErrorPage'



class PollCard extends React.Component {
  state = {
    toQuestionCard: false
  }
  handleClick = (e) => {
    e.preventDefault()
    this.setState(() => ({
      toQuestionCard: true
    }))
  }
  render() {

    console.log('PollCard props', this.props)
    
    const { author, question } = this.props
    const { avatarURL, name } = author
    const { optionOne, optionTwo, id } = question

    if (!question) {
      return <ErrorPage />
    }

    if (this.state.toQuestionCard) {
      return <Redirect to={`/questions/${id}`} />
    }


    return (
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
              <p>{optionOne.text}</p>
              <p>or</p>
              <p>{optionTwo.text}</p>
              <button className='btn' onClick={this.handleClick}>Cast Your Vote!</button>
            </div>
            
          </div>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = ({ questions, users }, { unansweredQid }) => {
  const question = questions[unansweredQid]
  const userId = question.author
  const author = users[userId]
  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(PollCard)
