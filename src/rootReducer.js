import { combineReducers } from 'redux'
import { drinksReducer } from './reducers/drinksReducer'
import { cardReducer } from './reducers/cardReducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  drinks: drinksReducer,
  card: cardReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
