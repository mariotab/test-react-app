import { ADD_CARD_ITEM } from '../actionType/cardActionType'

export function addCardItem(item) {
  return {
    type: ADD_CARD_ITEM,
    item
  }
}
