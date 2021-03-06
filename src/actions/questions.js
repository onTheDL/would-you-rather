
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function receiveQuestionAnswer(info) {
  return {
    type: SET_QUESTION_ANSWER,
    info,
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}
