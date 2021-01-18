import {
  CHANGE_SEARCHFIELD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
 } from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchMonsters = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateMonsters = {
  monsters: [],
  isPending: true
}

export const requestMonsters = (state=initialStateMonsters, action={}) => {
  switch (action.type) {
    case REQUEST_MONSTERS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_MONSTERS_SUCCESS:
      return Object.assign({}, state, {monsters: action.payload, isPending: false})
    case REQUEST_MONSTERS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
