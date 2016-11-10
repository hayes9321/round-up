(function() {
  angular.module('Roundup')
  .component('candidateInfo', {
    templateUrl: 'js/app/components/candidateInfo/candidateInfo.html',
    controller: CandidateInfo,
    controllerAs: 'candidateInfo',
  });

  function CandidateInfo() {
    var candidateInfo = this;
  }
})();