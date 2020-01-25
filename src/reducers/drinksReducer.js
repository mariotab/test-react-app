import { NEW_DRINKS, LOADING, HAS_ERROR } from '../actionType/drinksActionType'

const initialState = {
  drinks: [],
  loading: false,
  error: null
}

export const drinksReducer = function (state = initialState, action) {
  switch (action.type) {
    case NEW_DRINKS:
      return {
        ...state,
        drinks: action.drinks
      }
      case LOADING:
         return {
          ...state,
          loading: action.loading
        }
      case HAS_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false,
          drinks: []
        }
    default:
      return state
  }
}
