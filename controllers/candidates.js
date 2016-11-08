var express = require('express');
var Candidate = require('../models/candidate');
var router = express.Router();

//Find a candidate
router.get('/', function(req, res) {
  Candidate.find(function(err, candidates) {
    console.log("trying to find all candidates")
    if (err) return res.send({message: 'An error occurred when finding candidate'});
    res.send(candidates);
  });
});

module.exports = router;