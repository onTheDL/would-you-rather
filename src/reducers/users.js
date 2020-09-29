import { RECEIVE_USERS, SET_USER_ANSWER, ADD_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users,
      }
    case SET_USER_ANSWER :
      let { qid, authedUser, answer } = action.info

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        },
      }
      
    case ADD_USER_QUESTION :
      const { author, id } = action.question

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }

    default :
      return state
  }
}
