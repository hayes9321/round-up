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
    });

    PositionService.getAllPositions(function(data) {
      newRoundForm.positions = data.data;
    });

    newRoundForm.addCandidate = function() {
      CandidateService.getCandidate(newRoundForm.selectedCandidate, function(res) {
        newRoundForm.candidate = res.data;
        newRoundForm.newRound.candidate.firstName = newRoundForm.candidate.firstName;
        newRoundForm.newRound.candidate.lastName = newRoundForm.candidate.lastName;
        console.log('candidate data added: ', newRoundForm.newRound);
      });
    }

    newRoundForm.addPosition = function() {
      PositionService.getPosition(newRoundForm.selectedPosition, function(res) {
        newRoundForm.position = res.data;
        newRoundForm.newRound.position.title = newRoundForm.position.jobTitle;
        newRoundForm.newRound.position.description = newRoundForm.position.description;
        console.log('position data added: ', newRoundForm.newRound);
      });
    }

    newRoundForm.createRound = function() {
      RoundService.addRound(newRoundForm.newRound, function(data) {
        var newRoundId = data.data._id;
        window.location.href = '/round/' + newRoundId;
        console.log('new round added: ', data.data);
      }); 
    }

}

  NewRoundForm.$inject = ['$state', 'RoundService', 'CandidateService', 'PositionService'];
})()

