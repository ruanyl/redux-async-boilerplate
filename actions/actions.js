import fetch from 'isomorphic-fetch';

export const SEARCH = 'SEARCH';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export function inputChangeAction(text) {
  return {
    type: INPUT_CHANGE,
    text
  };
}

export function receiveDataAction(data) {
  return {
    type: RECEIVE_DATA,
    data
  };
}

export function searchAction(text) {
  return dispatch => {
    dispatch(inputChangeAction(text));
    return fetch(`https://api.github.com/search/repositories?q=${text}`)
    .then(res => res.json())
    .then(json => dispatch(receiveDataAction(json)));
  };
}
