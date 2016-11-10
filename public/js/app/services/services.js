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
    console.log('candidate data: ', candidateData);
    $http.post('/api/candidates', candidateData).then(function success(res) {
      console.log('successfully accessed api candidate', res);
      callback(res);
    }, function error(res) {
      console.log(res);
      console.log('Add Candidate error');
    });
  }
  //show one candidates details
  this.getCandidate = function(id, callback) {
    $http.get('/api/candidates/' + id).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  //edit one candidate
  this.updateCandidate = function(candidate, callback) {
    $http.put('/api/candidates/' + candidate._id, candidate).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }
  //delete one candidate
  this.deleteCandidate = function(candidate, callback) {
    $http.delete('/api/candidates/' + candidate._id).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
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
    console.log('question data: ', questionData);
    $http.post('/api/questions', questionData).then(function success(res) {
      console.log('success api question');
      callback(res);
    }, function error(res) {
      console.log(res);
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
    console.log('position data: ', positionData);
    $http.post('/api/positions', positionData).then(function success(res) {
      console.log('add new position');
      callback(res);
    }, function error(res) {
      console.log(res);
      console.log('add new position error');
    });
  }
}])
.service('RoundService', ['$http', function($http) {
  this.getAllRounds = function(callback) {
    $http({
      url: '/api/rounds',
      method: 'GET'
    }).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.getRound = function(id, callback) {
    $http.get('/api/rounds/' + id).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  this.addRound = function(roundData, callback) {
    console.log('round data: ', roundData);
    $http.post('/api/rounds', roundData).then(function success(res) {
      console.log('success api rounds');
      callback(res);
    }, function error(res) {
      console.log(res);
      console.log('addRound error');
    });
  }
}]);