(function() {
  angular.module('Roundup')
  .component('newCandidateForm', {
    templateUrl: 'js/app/components/newCandidateForm/newCandidateForm.html',
    controller: newCandidateForm,
    controllerAs: 'newCandidateForm'
  });

  function newCandidateForm() {
    var newCandidateForm = this;
    console.log('newCandidateForm firing');
  }
})();