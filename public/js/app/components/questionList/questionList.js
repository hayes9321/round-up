(function() { 
  angular.module('Roundup')
  .component('questionList', {
    templateUrl: 'js/app/components/questionList/questionList.html',
    controller: QuestionList,
    controllerAs: 'questionList',
  });

  function QuestionList(QuestionService) {
    var questionList = this;
    console.log("name: ", this);
    questionList.questions = [];

    QuestionService.getAllQuestions(function(data) {
      questionList.questions = data.data;
      console.log('data.data: ', data.data);
      console.log('questionList.questtions: ', questionList.questions);
    });
  }

  QuestionList.$inject = ['QuestionService'];
})()
