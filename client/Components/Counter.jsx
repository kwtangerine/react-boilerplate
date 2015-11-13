/** @jsx React.DOM */
'use strict'

var React = require('react')
var Counter = React.createClass({
    render: function(){

        return (
        <div className="counter">
          Clicked: {this.props.globalStates.counter} times
          <br/>
          <button onClick={this.props.actions.increment}>+</button>
          <button onClick={this.props.actions.decrement}>-</button>
        </div>
      )
    }
})

module.exports = Counter;
