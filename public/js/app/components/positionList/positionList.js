(function() { 
  angular.module('Roundup')
  .component('positionList', {
    templateUrl: 'js/app/components/positionList/positionList.html',
    controller: PositionList,
    controllerAs: 'positionList'
  });

  function PositionList(PositionService) {
    var positionList = this;
    positionList.delete = function(position) {
      PositionService.deletePosition(position, function(res) {
        positionList.positions = positionList.positions.filter(function(item) {
          return item !== position;
        });
      })
    }
    positionList.positions = [];

    PositionService.getAllPositions(function(data) {
      positionList.positions = data.data;
    });
  }

  PositionList.$inject = ['PositionService'];
})()