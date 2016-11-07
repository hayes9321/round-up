var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http').Server(app);

mongoose.connect('mongodb://localhost/roundup');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('morgan')('dev'));

app.get('/*', function(req, res) {
  console.log("sending index");
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);


