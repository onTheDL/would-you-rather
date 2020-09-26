import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'


class CreateNewPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { authedUser } = this.props
    const { optionOneText, optionTwoText } = this.state

    // todo:  Add NewPoll to Store
    // dispatch(handleAddQuestion({ 
    //   optionOneText,
    //   optionTwoText,
    //   authedUser
    //  }))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    }))

  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

  // Redirect to /home when submitted
    if (toHome) {
      return <Redirect to='/home' />
    }

    return (
      <div>
        <h3 className='center'>Create New Poll</h3>
        <form className='new-poll' onSubmit={this.handleSubmit}>

        <button
          className='btn'
          type='submit'
          disabled={ (optionOneText === '' || optionTwoText === '')} >
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
