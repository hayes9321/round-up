var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var http = require('http').Server(app);
var User = require('./models/user');
var secret = "mysupersecretpassword";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/roundup');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('morgan')('dev'));


app.use('/api/auth', require('./controllers/auth'));
app.use('/api/users', expressJWT({secret: secret}).unless({method: 'POST'}, require('./controllers/users')));

app.use(function (err, req, res, next) {
  // send an appropriate status code & JSON object saying there was an error, if there was one.
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({message: 'You need an authorization token to view this information.'})
  }
});

app.get('/*', function(req, res) {
  console.log("sending index");
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);


