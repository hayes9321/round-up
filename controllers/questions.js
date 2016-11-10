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

router.get('/:id', function(req, res) {
  Question.findById(req.params.id, function(err, question) {
    if (err) return res.status(500).send(err);
    return res.send(question);
  });
});

router.put('/:id', function(req, res) {
  Question.findByIdAndUpdate(req.params.id, req.body, function(err) {
    if (err) return res.status(500).send(err);
    return res.send({ message: 'success' });
  });
});

router.delete('/:id', function(req, res) {
  Question.findByIdAndRemove(req.params.id, function(err) {
    if (err) return res.status(500).send(err);
    return res.send({ message: 'success' });
  });
});

module.exports = router;