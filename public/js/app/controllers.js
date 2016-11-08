angular.module('Roundup')
.controller('HomeCtrl', ['$scope', '$state', 'UserService', 'CandidateService', 'QuestionService', function($scope, $state, UserService, CandidateService, QuestionService) {
  $scope.user = {};
  $scope.candidate = {};
  //$scope.questions = {};

}])

.controller('RoundCtrl', ['$scope', '$state', 'QuestionService', 'CandidateService', 'UserService', function($scope, $state, QuestionService, CandidateService, UserService) {
  $scope.questions = {};
  $scope.candidates = {};
  $scope.users = {};

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

}]);

