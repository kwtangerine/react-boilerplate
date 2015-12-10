/** @jsx React.DOM */
'use strict'

var React = require('react')
var Link = require('react-router').Link
var bindActionCreators = require('redux').bindActionCreators
var connect = require('react-redux').connect
var counterActions = require('../Actions/counter')
var studentActions = require('../Actions/student')

var App = React.createClass({
  render: function() {
    const globalStates =  this.props.globalStates;
    const actions =  this.props.actions;
    return (
      <div>
        {/* Header */}
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
        </ul>
        {/* Body */}
        {React.cloneElement(this.props.children, { actions, globalStates })}
        {/* Footer */}
      </div>
    );
  }
})

function mapStateToProps(state) {
  return {
    // Add new states to track here
    globalStates: {
      counter: state.counter,
      students: state.students
    }
  }
};

function mapDispatchToProps(dispatch) {
  var actions = {};

  actions = Object.assign(actions, counterActions);
  actions = Object.assign(actions, studentActions);

  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
