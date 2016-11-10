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
    //questions: []
  };


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

  // RoundService.getAllRounds(function(data) {
  // 	$scope.rounds = data.data;
  // 	console.log('rounds in new ctrl: ', $scope.rounds);
  // });

  var id = $stateParams.id;
 
  RoundService.getRound(id, function(res) {
  	$scope.round = res.data;
    console.log('stateparams res.data', res.data);
  });

  console.log('trying this ', $scope.questions);

  $scope.updateRound = function() {
    //console.log('data?', data);
    console.log('scope.round.questions: ', $scope.round.questions);
    var questions = $scope.round.questions;

    RoundService.updateRound($scope.round, function(res) {
      console.log('res in updateround controller: ', res);
      //$state.go('round', {id: $scope.round._id});
    });
  }

  $scope.submitQuestionToRound = function() {
    var existingData = $scope.round.questions
    console.log('existingData: ', existingData);
    console.log('new question? ', $scope.newQuestion);

    var updatedQuestionData = existingData.concat($scope.newQuestion);
    console.log('updated question data in controller: ', updatedQuestionData);

    // RoundService.addQuestionToRound($scope.newQuestion, $stateParams.id, existingData, function(res) {
      RoundService.addQuestionToRound(updatedQuestionData, id, function(res) {
      console.log('res in updateround controller: ', res);
      //$state.go('round', {id: $scope.round._id});
    });
  }


}]);

