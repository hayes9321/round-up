(function() { 
  angular.module('Roundup')
  .component('newRoundForm', {
    templateUrl: 'js/app/components/newRoundForm/newRoundForm.html',
    controller: NewRoundForm,
    controllerAs: 'newRoundForm'
  });

  function NewRoundForm($state, RoundService) {
    var newRoundForm = this;
    newRoundForm.rounds = [];
    newRoundForm.newRound = {
      candidateId: '',
      positionId: ''
    };

  newRoundForm.submitRound = function() {
    RoundService.addRound(newRoundForm.newRound, function(data) {
      RoundService.getAllRounds(function(data) {
        newRoundForm.rounds = data.data;
        //console.log('here: ', newQuestionForm.questions);
        $state.go('createRound', {}, {reload : true});
      });
    });

  }
}

  NewRoundForm.$inject = ['$state', 'RoundService'];
})()