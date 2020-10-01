import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'


class Nav extends React.Component {
  state = {
    toHome: false
  }
  handleLogoutClick = (e) => {
    e.preventDefault()
    const { authedUser, dispatch } = this.props

    this.setState(() => ({
      toHome: true
    }))
    dispatch(removeAuthedUser(authedUser))
  }

  render() {
    const { authedUser, users } = this.props
    const user = users[authedUser]
    const { avatarURL, name } = user

    if (this.state.toHome) {
      return <Redirect to='/home' />
    }
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/home' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' exact activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard'>
              Leaderboard
            </NavLink>
          </li>
          <li style={{display: "flex"}}>
            <span>Hello {name}</span>
            
            <span>
              <img
                src={avatarURL}
                alt={name}
                className='avatar' />
            </span>
          </li>
          <li onClick={this.handleLogoutClick}>
            <button className='logout-btn'>
              Logout
            </button>
          </li>
        </ul>
        
      </nav>
    )
  }
}
function mapStateToProps ({ users, authedUser }) {
  return {
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)