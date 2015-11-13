/** @jsx React.DOM */
'use strict'

// Stylesheet
require("../public/css/style.css");

// React
var React = require('react');
var ReactDOM = require('react-dom');

// React-Router
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var createBrowserHistory = require('history/lib/createBrowserHistory');

// Redux
var Provider = require('react-redux').Provider;
var configureStore = require('./Store/configureStore');

// Components
var App = require('./Components/App');
var Home = require('./Components/Home');
var Counter = require('./Components/Counter');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h2>About Us!</h2>
      </div>
    );
  }
});

var NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <h2>404 not found</h2>
      </div>
    );
  }
});

// Set global app container
var appElement = document.getElementById('app');

// Configure Redux store
var store = configureStore();

// Initialize routes for React-Router
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="counter" component={Counter}/>
      <Route path="about" component={About}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  appElement);
