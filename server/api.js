"use strict";

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('api!!!');
});

router.get('/echo/:val', function(req, res) {
  res.send('echoing ' + req.params.val);
});

router.get('/students/:class', function(req, res) {
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Pragma", "no-cache");
  res.header("Expires", 0);
  res.send('{ "students" : [ "Jack Aubrey", "Stephen Maturin", "Sophie Williams" ] }')
})

module.exports = router;
