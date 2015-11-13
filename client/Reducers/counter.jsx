/** @jsx React.DOM */
'use strict';

var Types = require('./../Actions/constants');

function counter(state, action) {
  state = state ? state : 0;

  switch(action.type) {
    case Types.INCREMENT_COUNTER:
      return state + 1;
    case Types.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

module.exports = counter;
