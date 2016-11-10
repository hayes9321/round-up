angular.module('Roundup')
// .controller('HomeCtrl', ['$scope', '$state', 'UserService', 'CandidateService', 'QuestionService', 'PositionService', function($scope, $state, UserService, CandidateService, QuestionService, PositionService) {
//   $scope.user = {};
//   $scope.candidate = {};
//   //$scope.questions = {};
// }])

.controller('RoundCtrl', ['$scope', '$state', 'QuestionService', 'CandidateService', 'UserService', 'RoundService', function($scope, $state, QuestionService, CandidateService, UserService, RoundService) {
  $scope.questions = {};
  $scope.candidates = {};
  $scope.users = {};
  $scope.rounds = {};

	QuestionService.getAllQuestions(function(data) {
    $scope.questions = data.data;
    console.log('questions in new ctrl: ', $scope.questions);
  });

  CandidateService.getAllCandidates(function(data) {
    $scope.candidates = data.data;
    console.log('candidates in new ctrl: ', $scope.candidates);
  });

  UserService.getAllUsers(function(data) {
    $scope.users = data.data;
    console.log('users in new ctrl: ', $scope.users);
  });

  RoundService.getAllRounds(function(data) {
  	$scope.rounds = data.data;
  	console.log('rounds in new ctrl: ', $scope.rounds);
  });


}])

.controller('EditRoundCtrl', ['$scope', '$stateParams', '$state', 'QuestionService', 'CandidateService', 'UserService', 'RoundService', function($scope, $stateParams, $state, QuestionService, CandidateService, UserService, RoundService) {
  $scope.questions = {};
  $scope.positions = {};
  $scope.candidates = {};
  $scope.users = {};
  $scope.rounds = {};

	QuestionService.getAllQuestions(function(data) {
    $scope.questions = data.data;
    console.log('questions in new ctrl: ', $scope.questions);
  });

  CandidateService.getAllCandidates(function(data) {
    $scope.candidates = data.data;
    console.log('candidates in new ctrl: ', $scope.candidates);
  });

  UserService.getAllUsers(function(data) {
    $scope.users = data.data;
    console.log('users in new ctrl: ', $scope.users);
  });

  RoundService.getAllRounds(function(data) {
  	$scope.rounds = data.data;
  	console.log('rounds in new ctrl: ', $scope.rounds);
  });

  var id = $stateParams.id;
  RoundService.getRound(id, function(res) {
  	$scope.round = res.data
  });
}])

.controller('EditCandidateCtrl', ['$scope', '$stateParams', '$state', 'CandidateService',
  function($scope, $stateParams, $state, CandidateService) {

  var id = $stateParams.id;
  CandidateService.getCandidate(id, function(res) {
    $scope.candidate = res.data;
  });

  $scope.updateCandidate = function() {
    CandidateService.updateCandidate($scope.candidate, function(res) {
      $state.go('candidates', {id: $scope.candidate._id});
    });
  }
}])

.controller('EditPositionCtrl', ['$scope', '$stateParams', '$state', 'PositionService', 'QuestionService',
  function($scope, $stateParams, $state, PositionService, QuestionService) {

  var id = $stateParams.id;

  PositionService.getPosition(id, function(res) {
    $scope.position = res.data;
    console.log("got position:", res.data);
  });

  QuestionService.getAllQuestions(function(data) {
    $scope.question = data.data;
    console.log("show all questions:", data.data)
    console.log("show specific question: ", data.data[0])
  })

  $scope.updatePosition = function() {
    PositionService.updatePosition($scope.position, function(res) {
      $state.go('positions', {id: $scope.position._id});
    });
  }
}])

.controller('EditQuestionCtrl', ['$scope', '$stateParams', '$state', 'QuestionService',
  function($scope, $stateParams, $state, QuestionService) {

  var id = $stateParams.id;
  QuestionService.getQuestion(id, function(res) {
    $scope.question = res.data;
  });

  $scope.updateQuestion = function() {
    QuestionService.updateQuestion($scope.question, function(res) {
      $state.go('questions', {id: $scope.question._id});
    });
  }
}]);