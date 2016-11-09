(function() { 
  angular.module('Roundup')
  .component('candidateList', {
    templateUrl: 'js/app/components/candidateList/candidateList.html',
    controller: CandidateList,
    controllerAs: 'candidateList'
  });

  function CandidateList(CandidateService) {
    var candidateList = this;
    candidateList.candidates = [];

    CandidateService.getAllCandidates(function(data) {
      candidateList.candidates = data.data;
    });
  }

  CandidateList.$inject = ['CandidateService'];
})()