(function() { 
  angular.module('Roundup')
  .component('candidateList', {
    templateUrl: 'js/app/components/candidateList/candidateList.html',
    controller: CandidateList,
    controllerAs: 'candidateList'
  });

  function CandidateList(CandidateService) {
    var candidateList = this;
    candidateList.delete = function(candidate) {
      CandidateService.deleteCandidate(candidate, function(res) {
        candidateList.candidates = candidateList.candidates.filter(function(item) {
          return item !== candidate;
        });
      })
    }
    candidateList.candidates = [];

    CandidateService.getAllCandidates(function(data) {
      candidateList.candidates = data.data;
    });
  };

  CandidateList.$inject = ['CandidateService'];
})()