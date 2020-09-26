import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, setUserAnswer } from './users'
import { receiveQuestions, receiveQuestionAnswer, addQuestion } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_USER = 'sarahedo'
 
export function handleInitialData(info) {
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


export function handleQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading())
    
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(setUserAnswer(info))
        dispatch(receiveQuestionAnswer(info))
      })
      .then(() => {
        dispatch(hideLoading())
      })
      .catch((e) => {
        console.warn('Error in handleQuestionAnswer: ', e)
        alert('There was an error receiving your answer. Try again.')


      })
  }
}

