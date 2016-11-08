angular.module('Roundup')
.service('UserService', ['$http', '' function($http) {
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
      console.log('addQuestion error');
    });
  }

}])
// angular.module('Roundup', ['ngResource'])
// .factory('UserService', ['$resource', function($resource) {
//   return $resource('/api/users/:id');
// }])

.factory('Auth', ['$window', function($window) {
  return {
    saveToken: function(token) {
      $window.localStorage['secretrecipes-token'] = token;
    },
    getToken: function() {
      return $window.localStorage['secretrecipes-token'];
    },
    removeToken: function() {
      $window.localStorage.removeItem('secretrecipes-token');
    },
    isLoggedIn: function() {
      var token = this.getToken();
      return token ? true : false;
    },
    currentUser: function() {
      if (this.isLoggedIn()) {
        var token = this.getToken();
        try {
          var payload = JSON.parse($window.atob(token.split('.')[1]));
          return payload;
        } catch(err) {
          return false;
        }
      }
    }
  }
}])

.factory('Alerts', [function() {
  var alerts = [];

  return {
    clear: function() {
      alerts = [];
    },
    add: function(type, msg) {
      alerts.push({type: type, msg: msg});
    },
    get: function() {
      return alerts;
    },
    remove: function(idx) {
      alerts.splice(idx, 1);
    }
  }
}])

.factory('AuthInterceptor', ['Auth', function(Auth) {
  // if querying other APIs, add URLs to this array
  var excludedEndpoints = [
    'https://swapi.co/api/films'
  ];

  return {
    request: function(config) {
      var token = Auth.getToken();
      var excludedEndpoint = excludedEndpoints.indexOf(config.url) > -1;
      if (token && !excludedEndpoint) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }
  }
}]);
