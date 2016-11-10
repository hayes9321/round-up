angular.module('Roundup')
.service('UserService', ['$http', function($http) {
  this.getAllUsers = function(callback) {
    $http({
      url: '/api/users',
      method: 'GET'
    }).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.addUser = function(userData, callback) {
    $http.post('/api/users', userData).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log('error')
      console.log(userData)
      console.log(res);
    });
  }
}])
.service('CandidateService', ['$http', function($http) {
  this.getAllCandidates = function(callback) {
    $http({
      url: '/api/candidates',
      method: 'GET'
    }).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.addCandidate = function(candidateData, callback) {
    $http.post('/api/candidates', candidateData).then(function success(res) {
      console.log('successfully accessed api candidate', res);
      callback(res);
    }, function error(res) {
      console.log(res);
      console.log('Add Candidate error');
    });
  }
}])
.service('QuestionService', ['$http', function($http) {
  this.getAllQuestions = function(callback) {
    $http({
      url: '/api/questions',
      method: 'GET'
    }).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.addQuestion = function(questionData, callback) {
    $http.post('/api/questions', questionData).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log('add Question error');
    });
  }
}])
.service('PositionService', ['$http', function($http) {
  this.getAllPositions = function(callback) {
    $http({
      url: '/api/positions',
      method: 'GET'
    }).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.addPosition = function(positionData, callback) {
    $http.post('/api/positions', positionData).then(function success(res) {
      callback(res);
    }, function error(res) {
    });
  }
}])

.service('RoundService', ['$http', function($http) {

  //GET ALL ROUNDS
  this.getAllRounds = function(callback) {
    $http({
      url: '/api/rounds',
      method: 'GET'
    }).then(function success(res) {
      callback(res);
    }, function error(res) {
    });
  }

  //Get specific round
  this.getRound = function(id, callback) {
    $http.get('/api/rounds/' + id).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  // CREATE NEW ROUND
  this.addRound = function(roundData, callback) {
    $http.post('/api/rounds', roundData).then(function success(res) {
      callback(res);
    }, function error(res) {
    });
  }

// EDIT SPECIFIC ROUND - !!(no front end for this yet)
  this.updateRound = function(round, callback) {
    $http.put('/api/rounds/' + round._id).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

// ADD NEW QUESTION TO EXISTING ROUND
  this.addQuestionToRound = function(questionData, roundId, callback) {
    $http.put('/api/rounds/' + roundId + '/questions', questionData).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

}]);