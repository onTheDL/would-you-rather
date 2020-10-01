import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class Leaderboard extends React.Component {
  render() {
    console.log('Leaderboard props:', this.props)

    return (
      <div className=' poll-list'>
        
        <ul>
          {this.props.userDeets.map(user => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
          
        </ul>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  const userDeets = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      numAnswers: Object.keys(user.answers).length,
      numQuestions: user.questions.length,
      score: Object.keys(user.answers).length + user.questions.length
    }))
    .sort((a,b) => b.score - a.score)

  return {
    userDeets,
  }
}

export default connect(mapStateToProps)(Leaderboard)
