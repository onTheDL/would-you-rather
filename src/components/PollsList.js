import React from 'react'
import { connect } from 'react-redux'
import PollCard from '../components/PollCard'
import AnsweredCard from './AnsweredCard'

class PollsList extends React.Component {
  render(){
    const { unansweredQids, answeredQids } = this.props
    
    return (
      <div className='poll-list'>

        <ul>
          {unansweredQids ? unansweredQids.map(unansweredQid => (
            <li key={unansweredQid}>
              <PollCard unansweredQid={unansweredQid} />
            </li>
          ))
          : answeredQids.map(answeredQids => (
            <li key={answeredQids}>
              <AnsweredCard ansQidFromHome={answeredQids}/>
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