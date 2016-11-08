angular.module('Roundup')
.controller('HomeCtrl', ['$scope', '$state', 'UserService', 'QuestionService', function($scope, $state, UserService, QuestionService) {
  $scope.user = {};
  $scope.questions = {};
}