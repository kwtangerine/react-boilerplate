"use strict";

// Vendors
var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

// Components
var api = require('./api');
var config = require('./config');

// Server Configuration
var app = express();
var proxy = httpProxy.createProxyServer();

var publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));
app.use('/api', api);

// Development config
var isProduction = process.env.NODE_ENV === 'production';

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment.
  var bundle = require('./bundle.js');
  bundle();

  // Any requests to <our_server>/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:' + config.webdevserver.port
    });
  });
}

app.get('/*', function(req, res) {
  res.sendFile('/index.html', {root: publicPath});
});

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
  console.log('Error is: ' + e);
});

app.listen(config.server.port, function() {
  console.log('Server listening on port ' + config.server.port + ' running in ' + process.env.NODE_ENV + ' mode');
} );
