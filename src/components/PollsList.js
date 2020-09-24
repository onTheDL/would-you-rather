import React from 'react'
import { connect } from 'react-redux'
import PollCard from '../components/PollCard'

class PollsList extends React.Component {
  render(){
   
    return (
      <div className='poll-list'>

        <ul>
          {this.props.qids.map(qid => (
            <li key={qid}>
              <PollCard qid={qid} />
            </li>
          ))}
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