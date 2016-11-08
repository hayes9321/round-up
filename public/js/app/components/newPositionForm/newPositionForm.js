(function() { 
  angular.module('Roundup')
  .component('newPositionForm', {
    templateUrl: 'js/app/components/newPositionForm/newPositionForm.html',
    controller: NewPositionForm,
    controllerAs: 'newPositionForm'
  });

  function NewPositionForm($state, PositionService, QuestionService) {
    var newPositionForm = this;
    newPositionForm.positions = [];
    newPositionForm.questions = [];
    newPositionForm.newPosition = {
      jobTitle: '',
      description: '',
      questions: []
    };

    QuestionService.getAllQuestions(function(data) {
      newPositionForm.questions = data.data;
      console.log("data.data", data.data)
    });

  newPositionForm.submitPosition = function() {
    PositionService.addPosition(newPositionForm.newPosition, function(data) {
      PositionService.getAllPositions(function(data) {
        newPositionForm.positions = data.data;
        console.log('position form: ', newPositionForm.positions);
      });
    });
  }
}

NewPositionForm.$inject = ['$state', 'PositionService', 'QuestionService'];

})()

