angular.module('Roundup')

.controller('RoundCtrl', ['$scope', '$state', 'QuestionService', 'CandidateService', 'UserService', 'RoundService', function($scope, $state, QuestionService, CandidateService, UserService, RoundService) {
  $scope.questions = {};
  $scope.candidates = {};
  $scope.users = {};
  $scope.rounds = {};

	QuestionService.getAllQuestions(function(data) {
    $scope.questions = data.data;
  });

  CandidateService.getAllCandidates(function(data) {
    $scope.candidates = data.data;
  });

  UserService.getAllUsers(function(data) {
    $scope.users = data.data;
  });

  RoundService.getAllRounds(function(data) {
  	$scope.rounds = data.data;
  });


}])

.controller('EditRoundCtrl', ['$scope', '$stateParams', '$state', 'QuestionService', 'CandidateService', 'UserService', 'RoundService', function($scope, $stateParams, $state, QuestionService, CandidateService, UserService, RoundService) {
  $scope.questions = {};
  $scope.positions = {};
  $scope.candidates = {};
  $scope.users = {};
  $scope.round = {
    candidate: {
      firstName: '',
      lastName: ''
    },
    position: {
      title: '',
      description: ''
    }
  };


	QuestionService.getAllQuestions(function(data) {
    $scope.questions = data.data;
  });

  CandidateService.getAllCandidates(function(data) {
    $scope.candidates = data.data;
  });

  UserService.getAllUsers(function(data) {
    $scope.users = data.data;
  });

  RoundService.getAllRounds(function(data) {
  	$scope.rounds = data.data;
  });

  var id = $stateParams.id;
 
  RoundService.getRound(id, function(res) {
  	$scope.round = res.data;
  });


  $scope.updateRound = function() {
    var questions = $scope.round.questions;

    RoundService.updateRound($scope.round, function(res) {
    });
  }

  // ADD NEW QUESTIONS TO ROUND FROM EDIT ROUND

  $scope.submitQuestionToRound = function() {
    var existingData = $scope.round.questions;
    var updatedQuestionData = existingData.concat($scope.newQuestion);

    RoundService.addQuestionToRound(updatedQuestionData, id, function(res) {
      $state.go('editRound', {id: $scope.round._id}, {reload : true});
    });
  }


}]);

