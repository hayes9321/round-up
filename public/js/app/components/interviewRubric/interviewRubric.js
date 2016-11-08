(function() {
  angular.module('Roundup')
  .component('interviewRubric', {
    templateUrl: 'js/app/components/interviewRubric/interviewRubric.html',
    controller: InterviewRubric,
    controllerAs: 'interviewRubric',
    // bindings: {
    //   description: '=',
    //   buyer: '=',
    //   paid: '='
    // }
  });

  function InterviewRubric() {
    var interviewRubric = this;
    console.log('interviewRubric firing');
  }
})();