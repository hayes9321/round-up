var express = require('express');
var Question = require('../models/question');
var router = express.Router();

//Find questions
router.get('/', function(req, res) {
  console.log('in question controller');
  Question.find(function(err, questions) {
    console.log('questions: ', questions);
    if (err) return res.send({message: 'An error occurred when finding questions'});

    res.send(questions);
  });
});

router.post('/', function(req, res) {
  var question = new Question(req.body);
  question.save(function(err) {
    if (err) return res.send({message: 'An error occurred when creating a question'});
    res.send(question);
  });
});


module.exports = router;