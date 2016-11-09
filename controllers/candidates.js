var express = require('express');
var Candidate = require('../models/candidate');
var router = express.Router();

//Find a candidate
router.get('/', function(req, res) {
  Candidate.find(function(err, candidates) {
    if (err) return res.send({message: 'An error occurred when finding candidate'});
    res.send(candidates);
  });
});

router.post('/', function(req, res) {
  console.log('new candidate req.body: ', req.body)
  var candidate = new Candidate(req.body);
  candidate.save(function(err) {
    if (err) return res.send({message: 'An error occurred when creating a candidate'});
    res.send(candidate);
    console.log("new candidate: ", candidate);
  });
});

module.exports = router;