(function() { 
  angular.module('Roundup')
  .component('newRoundForm', {
    templateUrl: 'js/app/components/newRoundForm/newRoundForm.html',
    controller: NewRoundForm,
    controllerAs: 'newRoundForm'
  });

  function NewRoundForm($state, RoundService, CandidateService, PositionService) {
    var newRoundForm = this;
    //newRoundForm.rounds = [];
    newRoundForm.candidates = {};
    newRoundForm.positions = {};
    newRoundForm.selectedCandidate = {};
    newRoundForm.selectedPosition = {};
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

    CandidateService.getAllCandidates(function(data) {
      newRoundForm.candidates = data.data;
      console.log('setupcandidate data.data ', data.data);
    });

    PositionService.getAllPositions(function(data) {
      newRoundForm.positions = data.data;
      console.log('setupposition data.data ', data.data);
    });

  newRoundForm.addCandidate = function() {
    CandidateService.getCandidate(newRoundForm.selectedCandidate, function(res) {
      console.log('res.data for candidate: ', res.data);
      console.log('newRoundForm.selectedCandidate: ', newRoundForm.selectedCandidate);
      newRoundForm.candidate = res.data;
      newRoundForm.newRound.candidate.firstName = newRoundForm.candidate.firstName;
      newRoundForm.newRound.candidate.lastName = newRoundForm.candidate.lastName;
      console.log('newRoundForm.newRound after adding candidate: ', newRoundForm.newRound);
      //newRoundForm.newRound.candidate = newRoundForm.candidate;
      //newRoundForm.newRound.candidate.firstName = res.data.
    });
  }

  newRoundForm.addPosition = function() {
    PositionService.getPosition(newRoundForm.selectedPosition, function(res) {
      console.log('res.data for position: ', res.data);
      console.log('newRoundForm.selectedPosition: ', newRoundForm.selectedPosition);
      newRoundForm.position = res.data;
      newRoundForm.newRound.position.title = newRoundForm.position.jobTitle;
      newRoundForm.newRound.position.description = newRoundForm.position.description;
      console.log('newRoundForm.newRound after adding candidate: ', newRoundForm.newRound);
      //newRoundForm.newRound.candidate = newRoundForm.candidate;
      //newRoundForm.newRound.candidate.firstName = res.data.
    });
  }

  newRoundForm.createRound = function() {
    RoundService.addRound(newRoundForm.newRound, function(data) {
      console.log('round service firing, data: ', data);
      console.log('round service firing, newroundForm.newRound: ', newRoundForm.newRound);
      // reload page with all rounds
      // RoundService.getAllRounds(function(data) {
      //   newRoundForm.rounds = data.data;
      //   console.log('newRoundForm.candidate: ', newRoundForm.rounds);
      
      //$state.go('round/:id', {id: newRound._id}, {reload : true});
      $state.go('rounds');
       // });
    }); 
  }


  newRoundForm.submitRound = function() {
    console.log('component newRoundForm.js, newRoundForm.submitRound() firing');
    console.log('submitRound data (newRoundForm.newRound) its sending to services: ', newRoundForm.newRound);
    

    console.log('newRoundForm.selectedCandidate: ', newRoundForm.selectedCandidate);
    console.log('newRoundForm.selectedPosition: ', newRoundForm.selectedPosition);


    PositionService.getPosition(newRoundForm.selectedPosition, function(res) {
      newRoundForm.position = res.data;
      console.log('in controller- position service, get positon firing');
      console.log('res.data for newRoundForm.position', res.data);
      console.log('newRoundForm.position.jobTitle: ', newRoundForm.position.jobTitle);
      newRoundForm.newRound.position.jobTitle = newRoundForm.position.jobTitle;
      newRoundForm.newRound.position.description = newRoundForm.position.description;
      //newRoundForm.newRound.position.jobTitle = newRoundForm.position.jobTitle;
    });


      // CandidateService.getCandidate(newRoundForm.selectedCandidate, function(res) {
      //   console.log('res.data for candidate: ', res.data);
      //   newRoundForm.candidate = res.data;
      //   newRoundForm.newRound.candidate.firstName = newRoundForm.candidate.firstName;
      //   newRoundForm.newRound.candidate.lastName = newRoundForm.candidate.lastName;
      //   //newRoundForm.newRound.candidate = newRoundForm.candidate;
      //   //newRoundForm.newRound.candidate.firstName = res.data.
      // });

    RoundService.addRound(newRoundForm.newRound, function(data) {
      console.log('round service firing, data: ', data);
      console.log('round service firing, newroundForm.newRound: ', newRoundForm.newRound);
      // reload page with all rounds
      // RoundService.getAllRounds(function(data) {
      //   newRoundForm.rounds = data.data;
      //   console.log('newRoundForm.candidate: ', newRoundForm.rounds);
      
      //$state.go('round/:id', {id: newRound._id}, {reload : true});
      $state.go('rounds');
       // });
    }); 


    // RoundService.addRound(newRoundForm.newRound, function(data) {
    //   console.log('round service firing, data: ', data);




        // RoundService.updatePosition(usetupRoundPosition.position, id, function(res) {
        //   $state.go('editRound', {position: setupRoundPosition.position}, {reload : true});
        //   });
        // }






      // reload page with all rounds
      // RoundService.getAllRounds(function(data) {
      //   newRoundForm.rounds = data.data;
      //   console.log('newRoundForm.candidate: ', newRoundForm.rounds);
        //$state.go('rounds', {}, {reload : true});
       // });
    //});

  }
}

  NewRoundForm.$inject = ['$state', 'RoundService', 'CandidateService', 'PositionService'];
})()

