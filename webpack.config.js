"use strict";

var path = require('path');
var Webpack = require('webpack');

var config = require('./server/config.js');

var isProduction = process.env.NODE_ENV === 'production';

var mainEntries = ['./client/index.jsx'];

if(!isProduction) {
  mainEntries = main.concat([
    // For hot style updates
    'webpack/hot/dev-server' ,
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:' + config.webdevserver.port,
  ]);
}

module.exports = {
  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: {
    main: mainEntries
  },
  output: {
    path: path.join(__dirname, isProduction? 'public' : '' , 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        // tell webpack to use jsx-loader for all *.jsx files but ignore
        // node_modules folder
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      },
      // Let us also add the style-loader and css-loader, which you can
      // expand with less-loader etc.
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!'
      }
    ]
  },
  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
