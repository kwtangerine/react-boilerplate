/** @jsx React.DOM */
'use strict';

var Types = require('./constants');

var counter = {

  decrement: function() {
    return {
      type: Types.DECREMENT_COUNTER
    }
  },

  increment: function() {
    return {
      type: Types.INCREMENT_COUNTER
    }
  },
  
};

module.exports = counter;
