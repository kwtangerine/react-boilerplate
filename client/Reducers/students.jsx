/** @jsx React.DOM */
'use strict';

var Types = require('./../Actions/constants');

function students(state, action) {
  state = state ? state : [];

  switch(action.type) {
    case Types.GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}

module.exports = students;
