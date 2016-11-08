angular.module('Roundup')
.controller('HomeCtrl', ['$scope', '$state', 'UserService', 'CandidateService', 'QuestionService', 'PositionService', function($scope, $state, UserService, CandidateService, QuestionService, PositionService) {
  $scope.user = {};
  $scope.candidate = {};
  $scope.questions = {};
  $scope.positions = {};

}]);

