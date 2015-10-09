import {SEARCH, INPUT_CHANGE, RECEIVE_DATA} from '../actions/actions';

const initialState = {
  searchText: '',
  result: {}
};

export function search(state = initialState, action) {
  console.log(state);
  console.log(action);
  switch(action.type) {
    case INPUT_CHANGE:
      return Object.assign({}, state, {searchText: action.text});
    case RECEIVE_DATA:
      return Object.assign({}, state, {result: action.data});
    default:
      return state;
  }
}
