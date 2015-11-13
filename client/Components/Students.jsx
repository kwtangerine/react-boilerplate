/** @jsx React.DOM */
'use strict'
var React = require('react')

var Students = React.createClass({
  componentDidMount: function() {
    this.props.actions.getStudents('foo');
  },

  render: function(){
    var studentNodes = [];

    for (var i = 0; i < this.props.students.length; ++i) {
      var student = this.props.students[i];
      studentNodes.push(
        <option key={i} index={i}>{student}</option>
      );
    }

    return (
      <select id={this.props.id? this.props.id : 'students'}>
        {studentNodes}
      </select>
    )
  }
})
module.exports = Students;
