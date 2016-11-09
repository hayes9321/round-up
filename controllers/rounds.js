var express = require('express');
var Round = require('../models/round');
var router = express.Router();

//Find rounds
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

// router.route('/:id')
//   .get(function(req, res) {
//     Airplane.findById(req.params.id, function(err, airplane) {
//       if (err) return res.status(500).send(err);
//       return res.send(airplane);
//     });
//   })
//   .put(function(req, res) {
//     Airplane.findByIdAndUpdate(req.params.id, req.body, function(err) {
//       if (err) return res.status(500).send(err);
//       return res.send({ message: 'success' });
//     });
//   })
//   .delete(function(req, res) {
//     Airplane.findByIdAndRemove(req.params.id, function(err) {
//       if (err) return res.status(500).send(err);
//       return res.send({ message: 'success' });
//     });
//   });



// router.get('/round/:id', function(req, res) {
router.route('/:id')
  .get(function(req, res) {
    Round.findById(req.params.id, function(err, round) {
      if (err) return res.status(500).send(err);
      return res.send(round);
    });
  })
  .put(function(req, res) {
    Round.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      return res.send({ message: 'success' });
    });
  })
  .delete(function(req, res) {
    Round.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      return res.send({ message: 'success' });
    });
  });





module.exports = router;