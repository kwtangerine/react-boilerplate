/** @jsx React.DOM */
'use strict';

var Types = require('./constants');
var API = require('./../api');

var student = {
  getStudents: function(classId) {
    return dispatch => {
      API.fetchGET('api/students/' + classId).
        then(function (data) {
          dispatch({
            type: Types.GET_STUDENTS,
            students: data.students
          });
        }).
        catch(function(error) {
          console.log('request failed', error)
        })
    }
  }
};

module.exports = student;
