import React from 'react'
import { connect } from 'react-redux'



class PollCard extends React.Component {
  render() {

    console.log('PollCard props', this.props)
    
    const { author, question } = this.props
    const { avatarURL, name } = author
    const { optionOne, optionTwo } = question

    if (!question) {
      return <p>This poll does not exist.</p>
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
              <p>OR</p>
              <p>{optionTwo.text}</p>
              <button>View Poll</button>
            </div>
            
          </div>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = ({ questions, users }, { qid }) => {
  const question = questions[qid]
  const userId = question.author
  const author = users[userId]
  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(PollCard)
