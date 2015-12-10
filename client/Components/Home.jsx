/** @jsx React.DOM */
'use strict'
var React = require('react')

// Components
var Students = require('./Students')

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Students id= 'studentsblock' actions={this.props.actions} students={this.props.globalStates.students} />
      </div>
    );
  }
})

module.exports = Home;
