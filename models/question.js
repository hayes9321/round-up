var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
  simpleId: Number,
  question: String
});

var Question = mongoose.model('Question', questionSchema);

module.exports = Question;