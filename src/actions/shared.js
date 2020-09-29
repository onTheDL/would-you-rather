import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { receiveUsers, setUserAnswer, addUserQuestion } from './users'
import { receiveQuestions, receiveQuestionAnswer, addQuestion } from './questions'

import { showLoading, hideLoading } from 'react-redux-loading'

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUserQuestion(question))
      })
      .then(() => {
        dispatch(hideLoading())
      })
  }
}
 
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

