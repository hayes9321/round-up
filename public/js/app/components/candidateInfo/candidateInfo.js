(function() {
  angular.module('Roundup')
  .component('candidateInfo', {
    templateUrl: 'js/app/components/candidateInfo/candidateInfo.html',
    controller: CandidateInfo,
    controllerAs: 'candidateInfo',
    // bindings: {
    //   description: '=',
    //   buyer: '=',
    //   paid: '='
    // }
  });

  function CandidateInfo() {
    var candidateInfo = this;
    console.log('candidateInfo firing');
  }
})();