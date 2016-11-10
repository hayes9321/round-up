(function() { 
  angular.module('Roundup')
  .component('questionList', {
    templateUrl: 'js/app/components/questionList/questionList.html',
    controller: QuestionList,
    controllerAs: 'questionList',
  });

  function QuestionList(QuestionService) {
    var questionList = this;
    questionList.delete = function(question) {
      QuestionService.deleteQuestion(question, function(res) {
        questionList.questions = questionList.questions.filter(function(item) {
          return item !== question;
        });
      })
    }
    questionList.questions = [];

    QuestionService.getAllQuestions(function(data) {
      questionList.questions = data.data;
    });
  }

  QuestionList.$inject = ['QuestionService'];
})()
