'use strict'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

var API = {

// Wrapper for fetch
fetchGET: function(url) {
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
  }
}

module.exports = API
