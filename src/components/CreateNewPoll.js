import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class CreateNewPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state

    // todo:  Add NewPoll to Store
    dispatch(handleAddQuestion({ 
      optionOneText,
      optionTwoText,
      authedUser
     }))

  }
  render() {
    const { optionOneText, optionTwoText } = this.state

  // Redirect to /home when submitted

    return (
      <div>
        <h3 className='center'>Create New Poll</h3>
        <form className='new-poll' onSubmit={this.handleSubmit}>

        <button
          className='btn'
          type='submit'
          disabled={ !optionOneText || !optionTwoText }>
            Submit
        </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(CreateNewPoll)
