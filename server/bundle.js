'use strict';

// Vendors
var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var fs = require('fs');

var webpackConfig = require('./../webpack.config');
var config = require('./config');

module.exports = function () {

  // First we fire up Webpack and pass in the configuration we created
  var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  // We give notice in the terminal when it starts bundling and
  // set the time it started
  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the
  // time it took. Nice to have
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path when proxying:
    publicPath: '/build/',

    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  bundler.listen(config.webdevserver.port, 'localhost', function () {
    console.log('Bundling project, please wait...');
  });

};
