(function() { 
  angular.module('Roundup')
  .component('questionList', {
    templateUrl: 'js/app/components/questionList/questionList.html',
    controller: QuestionList,
    controllerAs: 'questionList'
  });

  function QuestionList($state, QuestionService) {
    var questionList = this;
    questionList.questions = [];

    QuestionService.getAllQuestions(function(data) {
      questionList.questions = data.data;
    });
  }

  QuestionList.$inject = ['$state', 'QuestionService'];
})()