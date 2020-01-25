import { combineReducers } from 'redux'
import { drinksReducer } from './reducers/drinksReducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  drinks: drinksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
