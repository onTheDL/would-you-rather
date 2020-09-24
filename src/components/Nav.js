import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'
import Login from './Login'

class Nav extends React.Component {

  handleLogoutClick = (e) => {
    e.preventDefault()
    const { authedUser, dispatch } = this.props

    dispatch(removeAuthedUser(authedUser))


  }

  render() {
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
          <li>
            User
          </li>
          <li>
            <a href='#' onClick={this.handleLogoutClick}>
              Logout
            </a>
            
          </li>
        </ul>
        
      </nav>
    )
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Nav)