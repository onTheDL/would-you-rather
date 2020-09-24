import { 
  RECEIVE_QUESTIONS, 
  SET_QUESTION_ANSWER,
  ADD_QUESTION,
} from '../actions/questions'


export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions,
      }
    
    case ADD_QUESTION :
      const { question } = action
      return {
        ...state,
        [question.id]: question

      }

    case SET_QUESTION_ANSWER :
      return {
        
      }
    default :
      return state
  }
}