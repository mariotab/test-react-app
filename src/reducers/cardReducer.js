import { ADD_CARD_ITEM } from '../actionType/cardActionType'

const initialState = {
  cardItems: []
}

export const cardReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD_ITEM:
      const cardItems = [...state.cardItems, action.item]
      return {
        ...state,
        cardItems
      }
    default:
      return state
  }
}
