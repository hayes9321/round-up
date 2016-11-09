(function() {
  angular.module('Roundup')
  .component('navBar', {
    templateUrl: 'js/app/components/navbar/navbar.html',
    controller: Navbar,
    controllerAs: 'navbar'
  });

  function Navbar() {
  }

})()