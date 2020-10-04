import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option'

class AnsweredCard extends Component {
  render() {
    
  const { ansQidFromHome, users, questions, authedUser } = this.props

  const qid = this.props.location 
    ? this.props.location.state.qid
    : ansQidFromHome
  
  const { author, optionOne, optionTwo } = questions[qid]
  
  const optOneVotes = optionOne.votes.length

  const optTwoVotes = optionTwo.votes.length

  const percentage = (option) => {
    return Math.round(option / (optOneVotes + optTwoVotes) * 100)
  }


  const { avatarURL, name } = users[author]
  
  const optSelected = users[authedUser].answers[qid]

  const isSelected = (option) => {
    return optSelected === option
  }

  console.log('AnswerCard optSelected:', optSelected)
  console.log('AnsweredCard qid:', qid)
  console.log('optionOne:', optionOne)
  console.log('optionTwo:', optionTwo)
  
    
    return (

      <div className='poll-card'>
        
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar' />
        <div className='poll-info'>
          <div>
            <span>{name}'s question</span>
            <div className='poll-info center'>
              <h2>Result</h2>
              {/* <p className='user-answer-box'>
                {optionOne.text}
                {isSelected('optionOne') && <span className='user-answer-tag'>&larr; Your Answer</span>}
              </p> */}

              <Option 
                option={optionOne.text}
                isSelected={isSelected('optionOne')} 
              /> 

              <p>or</p>

              <Option 
                option={optionTwo.text} 
                isSelected={isSelected('optionTwo')}
              /> 

              {/* <p className='user-answer-box'>
                {optionTwo.text}
                {isSelected('optionTwo') && <span className='user-answer-tag'>&larr; Your Answer</span>}
              </p> */}
            </div>
            <div>
              <h4>Vote Details</h4>
              <p># voted for option1: {optOneVotes} || {percentage(optOneVotes)}%</p>
              <p># voted for option2: {optTwoVotes} || {percentage(optTwoVotes)}% </p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  }
  

}

export default connect(mapStateToProps)(AnsweredCard)
