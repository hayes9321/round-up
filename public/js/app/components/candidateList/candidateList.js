(function() { 
  angular.module('Roundup')
  .component('candidateList', {
    templateUrl: 'js/app/components/candidateList/candidateList.html',
    controller: CandidateList,
    controllerAs: 'candidateList'
  });

  function CandidateList(CandidateService) {
    console.log("in candidate list");
    var candidateList = this;
    candidateList.candidates = [];

    CandidateService.getAllCandidates(function(data) {
      candidateList.candidates = data.data;
      console.log("data for candidates: ", data.data);
    });
  }

  CandidateList.$inject = ['CandidateService'];
})()