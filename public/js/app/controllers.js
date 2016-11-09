angular.module('Roundup')
.controller('HomeCtrl', ['$scope', '$state', 'UserService', 'CandidateService', 'QuestionService', 'PositionService', function($scope, $state, UserService, CandidateService, QuestionService, PositionService) {
  $scope.user = {};
  $scope.candidate = {};
  //$scope.questions = {};

}])

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


}]);

