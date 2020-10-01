import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCard extends Component {
   /*
  Will need:
  1. user's name
  2. user avatar
  3. num questions asked
  4. num questions answered
  */
  render() {
    // const { users, userId } = this.props
    // const user = users[userId]
    // const { name, avatarURL, answers, questions } = user

    // const answersArr = Object.keys(answers)
    // const numAnswers = answersArr.length

    // const numQuestions = questions.length

    // const score = numAnswers + numQuestions

    const {
      name,
      avatarURL,
      numAnswers,
      numQuestions,
      score
    } = this.props.user

    return (
      <div className='poll-card'>
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar' />

        <div className='poll-info'>
          <div>
            <span>{name}</span>
            <div className='poll-info'>
            <h5>Answered questions: {numAnswers}</h5>
    <h5>Questions created: {numQuestions}</h5>
            <h5>Score: {score}</h5>
            </div>
            
          </div>
        </div>

      </div>
    )
  }
}



export default connect()(UserCard)
