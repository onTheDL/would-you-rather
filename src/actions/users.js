export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const SET_USER_ANSWER = 'SET_USER_ANSWER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function setUserAnswer(info) {
  return {
    type: SET_USER_ANSWER,
    info,
  }
}

export function addUserQuestion (question) {
  return {
    type: ADD_USER_QUESTION,
    question,
  }
}