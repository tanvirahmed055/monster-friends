import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestMonsters = () => (dispatch) => {
  dispatch({ type: REQUEST_MONSTERS_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_MONSTERS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_MONSTERS_FAILED, payload: error }))
}