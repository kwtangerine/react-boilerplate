/** @jsx React.DOM */
'use strict';

var applyMiddleware = require('redux').applyMiddleware
var createStore = require('redux').createStore
var thunk = require('redux-thunk')

var rootReducer = require('../Reducers/index')

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../Reducers/index', function() {
      const nextReducer = require('../Reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

module.exports = configureStore;
