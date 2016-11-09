var mongoose = require('mongoose');

var roundSchema = new mongoose.Schema({
  //candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate'},
  //positionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
  //position: { type: mongoose.Schema.Types.ObjectId, ref: 'Position'},
  //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  //score: Number,
  //notes: String
  candidateId: Number,
  positionId: Number
});

var Round = mongoose.model('Round', roundSchema);

module.exports = Round;