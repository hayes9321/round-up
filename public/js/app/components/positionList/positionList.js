(function() { 
  angular.module('Roundup')
  .component('positionList', {
    templateUrl: 'js/app/components/positionList/positionList.html',
    controller: PositionList,
    controllerAs: 'positionList'
  });

  function PositionList(PositionService) {
    console.log("in position list");
    var positionList = this;
    positionList.positions = [];

    PositionService.getAllPositions(function(data) {
      positionList.positions = data.data;
      console.log("data for positions: ", data.data);
    });
  }

  PositionList.$inject = ['PositionService'];
})()