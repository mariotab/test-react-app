import { LOADING, NEW_DRINKS, HAS_ERROR } from '../actionType/drinksActionType'
import axios from '../punkApiService/axios'

export function toggleLoading(loading) {
  return {
    type: LOADING,
    loading
  }
}

export function newDrinks(drinks) {
  return {
    type: NEW_DRINKS,
    drinks
  }
}

export function toggleError(error) {
  return {
    type: HAS_ERROR,
    error
  }
}

export function fetchDrinks() {
  return async dispatch => {
    try {
      dispatch(toggleLoading(true))
      const res = await axios('/beers',{
        method: 'get'
      })
      dispatch(newDrinks(res.data))
      dispatch(toggleLoading(false))
    } catch (error) {
      console.log(error)
      dispatch(toggleError(error))
    }
  };
}
