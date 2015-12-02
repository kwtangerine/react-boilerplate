'use strict';

var isProduction = process.env.NODE_ENV === 'production';

var config;

config = {
  server: {
    port: isProduction? 8080 : 4000
  },
  webdevserver: {
    port: 8090
  }
};

module.exports = config;
