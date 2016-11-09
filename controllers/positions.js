var express = require('express');
var Position = require('../models/position');
var router = express.Router();

router.get('/', function(req, res) {
  Position.find(function(err, positions) {
    console.log("finding positions")
    if (err) return res.send({message: 'An error occurred when finding positions'});
    res.send(positions);
    console.log("finding positions")
  });
});

//Create a new position
router.post('/', function(req, res) {
  console.log("new position req.body: ", req.body)
  var position = new Position(req.body);
  position.save(function(err) {
    if (err) return res.send({message: 'An error occurred when adding a new position'});
    res.send(position);
  });
});

module.exports = router;