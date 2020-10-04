import React from 'react'
import PropTypes from 'prop-types';
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

PollsList.propTypes = {
  unansweredQids: PropTypes.array,
  answeredQids: PropTypes.array,
}

export default PollsList