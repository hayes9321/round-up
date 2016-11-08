angular.module('Roundup')
.controller('HomeCtrl', ['$scope', '$state', 'UserService', 'CandidateService', 'QuestionService', function($scope, $state, UserService, CandidateService, QuestionService) {
  $scope.user = {};
  $scope.candidate = {};
  $scope.questions = {};
}]);

