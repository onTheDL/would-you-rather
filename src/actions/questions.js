import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function receiveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SET_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    // const { authedUser } = getState()

    dispatch(showLoading())
    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))

  }
}



/*

export function handleQuestionAnswer (info) {
  return (dispatch) => {
    dispatch(receiveQuestionAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleReceiveQuestionAnswer: ', e)
        dispatch(receiveQuestions(info))
        alert('There was an error receiving your answer. Try again.')
      })
  }
}

*/