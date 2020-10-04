import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Homepage from './components/Homepage'
import Login from './components/Login'
import LoadingBar from 'react-redux-loading'
import AnsweredCard from './components/AnsweredCard'
import CreateNewPoll from './components/CreateNewPoll'
import Leaderboard from './components/Leaderboard'
import Nav from './components/Nav'
import QuestionCard from './components/QuestionCard'
import ErrorPage from './components/ErrorPage'

class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
    const { dispatch } = this.props
    dispatch(handleInitialData())

    // store.subscribe(() => this.forceUpdate())
  }

  render() {
    const { authenticated } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>

            {authenticated && <Nav />}

            <Switch>
              {authenticated === null
                ? <Route 
                    path='*'
                    render={({ history }) => (
                      <Login navToHome={() => history.push('/')} />
                      )}
                  />
                
                : <Fragment>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/add' component={CreateNewPoll} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Route path='/questions/:id' exact component={QuestionCard} />
                    <Route path='/answer/:id' exact component={AnsweredCard} />
                  </Fragment>
              }
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
      
    )
  }
  
}

function mapStateToProps ({ authedUser }) {
  return {
    authenticated: authedUser
  }
}

export default connect(mapStateToProps)(App);
