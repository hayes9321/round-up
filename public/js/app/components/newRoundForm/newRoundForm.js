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
      },
      questions: []
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
        console.log('position questions?', res.data.questions);

        var existingQuestions = res.data.questions;
        var compileQuestions = [];
        console.log('questions: ', compileQuestions);

        existingQuestions.forEach(function(question){
          compileQuestions.push({question});
          console.log('new round with new questions: ', newRoundForm.newRound);
          console.log('compile questions: ', compileQuestions);
          newRoundForm.newRound.questions = compileQuestions;
        });

        newRoundForm.position = res.data;
        newRoundForm.newRound.position.title = newRoundForm.position.jobTitle;
        newRoundForm.newRound.position.description = newRoundForm.position.description;
        newRoundForm.newRound.position.questions = compileQuestions;
        console.log('position data added: ', newRoundForm.newRound);
      });
    }

    newRoundForm.createRound = function() {
      RoundService.addRound(newRoundForm.newRound, function(data) {
        console.log('newRoundForm.newRound: ', newRoundForm.newRound);
        var newRoundId = data.data._id;
        window.location.href = '/round/' + newRoundId;
        //console.log('new round added: ', data.data);
      }); 
    }

}

  NewRoundForm.$inject = ['$state', 'RoundService', 'CandidateService', 'PositionService'];
})()

