import React from 'react'
import { connect } from 'react-redux'

import PollsList from '../components/PollsList'

class Homepage extends React.Component {
  state = {
    list: 'unansweredQs'
  }

  handleUnansweredSelect = () => {
    this.setState(() => ({
      list: 'unansweredQs'
    }))
  }

  handleAnsweredSelect = () => {
    this.setState({
      list: 'answeredQs'
    })
  }

  render() {
    console.log('Homepage Props', this.props)
    const { unansweredQid, answeredQid } = this.props
    const { list } = this.state
    

    return (
      <div>
        <h3 className='center'>Poll Questions</h3>
        <ul className='poll-nav'>
          <li className={list === 'unansweredQs' ? 'poll-active' : ''}
            onClick={this.handleUnansweredSelect}><a href='#'>Unanswered Questions</a></li>
          <li className={list === 'unansweredQs' ? '' : 'poll-active'}
            onClick={this.handleAnsweredSelect}><a href='#'>Answered Questions</a></li>
        </ul>
        <PollsList unansweredQids={list === 'unansweredQs' ? unansweredQid : null} answeredQids={list === 'answeredQs' ? answeredQid : null} />
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  
  const answeredQid = Object.keys(users[authedUser].answers)
    .sort((a, b) => users[authedUser].answers[b].timestamp - users[authedUser].answers[a].timestamp)

  const unansweredQid = Object.keys(questions)
    .filter(qid => !answeredQid.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
 

  return {
    answeredQid,
    unansweredQid,
  }
}

export default connect(mapStateToProps)(Homepage)
