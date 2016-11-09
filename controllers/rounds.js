var express = require('express');
var Round = require('../models/round');
var router = express.Router();

//Find questions
router.get('/', function(req, res) {
  console.log('in round controller');
  Round.find(function(err, rounds) {
    console.log('rounds: ', rounds);
    if (err) return res.send({message: 'An error occurred when finding questions'});

    res.send(rounds);
  });
});

router.post('/', function(req, res) {
  var round = new Round(req.body);
  round.save(function(err) {
    if (err) return res.send({message: 'An error occurred when creating a question'});
    res.send(round);
  });
});


module.exports = router;