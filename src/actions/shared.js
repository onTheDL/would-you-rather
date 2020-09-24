import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions, receiveQuestionAnswer } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_USER = 'sarahedo'
 
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        // dispatch(setAuthedUser(authedUser))
        dispatch(hideLoading())
      })
  }
}


export function handleQuestionAnswer (info) {
  return (dispatch) => {
    //no need for OPTIMISTIC UPDATE


    return saveQuestionAnswer(info)
      .then(question => {
        // Add to store
        
      })
      .catch((e) => {
        console.warn('Error in handleReceiveQuestionAnswer: ', e)
        alert('There was an error receiving your answer. Try again.')


      })
  }
}

