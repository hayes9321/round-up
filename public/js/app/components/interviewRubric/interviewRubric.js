(function() {
  angular.module('Roundup')
  .component('interviewRubric', {
    templateUrl: 'js/app/components/interviewRubric/interviewRubric.html',
    controller: InterviewRubric,
    controllerAs: 'interviewRubric',
  });

  function InterviewRubric() {
    var interviewRubric = this;
  }
})();