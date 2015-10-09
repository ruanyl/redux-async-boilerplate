// import css from './static/css/style.css';

import thunkMiddleware from 'redux-thunk';

import React from 'react';
import App from './containers/App';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const geekrApp = combineReducers(reducers);
const store = createStoreWithMiddleware(geekrApp);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('content')
);
