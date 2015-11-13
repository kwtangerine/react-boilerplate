/** @jsx React.DOM */
'use strict';

var combineReducers = require('redux').combineReducers

// Reducers
var counter = require('./counter')
var students = require('./students')

const rootReducer = combineReducers({
  // Add reducers to this list -- keep alphabetical order!
  counter,
  students
})

module.exports = rootReducer
