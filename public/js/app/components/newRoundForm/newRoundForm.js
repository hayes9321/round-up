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
      candidate: {
        firstName: '',
        lastName: ''
      },
      position: {
        title: '',
        description: ''
      }
    };
    // newRoundForm.newRound.candidate = {
    //   firstName: '',
    //   lastName: ''
    // };
    // newRoundForm.newRound.position = {
    //   title: '',
    //   description: ''
    // };

  newRoundForm.submitRound = function() {
    console.log('component newRoundForm.js, newRoundForm.submitRound() firing');
    console.log('submitRound data (newRoundForm.newRound) its sending to services: ', newRoundForm.newRound);
    RoundService.addRound(newRoundForm.newRound, function(data) {
      console.log('round service firing, data: ', data);
      // reload page with all rounds
      // RoundService.getAllRounds(function(data) {
      //   newRoundForm.rounds = data.data;
      //   console.log('newRoundForm.candidate: ', newRoundForm.rounds);
        $state.go('createRound', {}, {reload : true});
       // });
    });

  }
}

  NewRoundForm.$inject = ['$state', 'RoundService'];
})()