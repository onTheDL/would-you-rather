import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'


class CreateNewPoll extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
    
  }

  handleOptOneInput = (e) => {
    this.setState({
      optionOneText: e.target.value
    })
  }

  handleOptTwoInput = (e) => {
    this.setState({
      optionTwoText: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { authedUser } = this.props
    const author = authedUser
    const { optionOneText, optionTwoText } = this.state

    
    dispatch(handleSaveQuestion({ 
      optionOneText,
      optionTwoText,
      author
     }))

    this.setState(() => ({
      toHome: true
    }))

  }
  render() {
    const { optionOneText, optionTwoText, toHome } = this.state

    console.log('CreateNewPoll optionOneText:', optionOneText)
    console.log('CreateNewPoll optionTwoText:', optionTwoText)

  // Redirect to /home when submitted
    if (toHome) {
      return <Redirect to='/home' />
    }

    return (
      <div className='center'>
        <h2>Create New Poll</h2>
        <h4>Would you rather ...</h4>
        <form className='new-poll' onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input 
                type='text' 
                placeholder='Enter first option' 
                onChange={this.handleOptOneInput} 
              />
            </label>
          </div>
          <p>or</p>
          <div>
            <label>
              <input 
                type='text' 
                placeholder='Enter second option'
                onChange={this.handleOptTwoInput}
              />
            </label>
          </div>

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
