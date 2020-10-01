import React from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends React.Component {
  state = {
    id: ''
  }

  handleSelect = (e) => {  
    this.setState({
      id: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { dispatch } = this.props
    const { id } = this.state
    dispatch(setAuthedUser(id))

    // const { navToHome, match } = this.props
    // if(!match.params) {
    //   navToHome()
    // }
    

  } 
  render() {
    console.log('LOGIN props:', this.props)
    const { id } = this.state
    return (
      <div>
        <h1>Welcome to Would You Rather</h1>
        <p>Please login to continue</p>
          <form>
            <label>Select a name:</label>
            <select onChange={(e) => this.handleSelect(e)} >
              <option value=''>Select a user</option>
              <option value='sarahedo'>Sara Hedo</option>
              <option value='tylermcginnis'>Tyler Mcginnis</option>
              <option value='johndoe'>John Doe</option>
            </select>
            <button onClick={this.handleSubmit} disabled={!id} >Submit</button>
          </form>
        
      </div>
    )
  }
}

export default connect()(Login)