import React from 'react'
import { connect } from 'react-redux'
import PollCard from '../components/PollCard'
import AnsweredCard from './AnsweredCard'

class PollsList extends React.Component {
  render(){
    const { unansweredQids, answeredQids } = this.props
    // const idsToMap = unansweredQids ? unansweredQids : answeredQids
    return (
      <div className='poll-list'>

        <ul>
          {unansweredQids ? unansweredQids.map(qid => (
            <li key={qid}>
              <PollCard qid={qid} />
            </li>
          ))
          : answeredQids.map(ansId => (
            <li key={ansId}>
              <AnsweredCard ansId={ansId}/>
            </li>
          ))
          }
      

          
        </ul>

      </div>
    )
  }
}
// function mapStateToProps({ questions }) {
//   const qids = Object.keys(questions)
//     .sort((a,b) => {
//       return questions[b].timestamp - questions[a].timestamp
//     })
  
//   return {
//     qids,
//   }
// }
export default PollsList