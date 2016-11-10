(function() { 
  angular.module('Roundup')
  .component('roundList', {
    templateUrl: 'js/app/components/roundList/roundList.html',
    controller: RoundList,
    controllerAs: 'roundList'
  });

  function RoundList(RoundService) {
    var roundList = this;
    roundList.rounds = [];

    RoundService.getAllRounds(function(data) {
      roundList.rounds = data.data;
      console.log
    });
  }

  RoundList.$inject = ['RoundService'];
})()




