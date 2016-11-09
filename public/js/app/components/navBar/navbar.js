(function() {
  angular.module('Roundup')
  .component('navBar', {
    templateUrl: 'js/app/components/navbar/navbar.html',
    controller: NavBar,
    controllerAs: 'navBar'
  });

  function NavBar($http, $state, $location, Auth, Alerts) {
    var navBar = this;
    navBar.Auth = Auth;
    console.log("this is Auth",  Auth)

    navBar.logout = function() {
    console.log('clicked');
    Auth.removeToken();
    console.log('My token:', Auth.getToken());
    Alerts.add('success', 'Logged out!');
    $state.reload();
  	}
  }

  NavBar.$inject = ['$http','$state', '$location', 'Auth','Alerts'];
})()

  // $scope.Auth = Auth;
  // $scope.logout = function() {
  //   Auth.removeToken();
  //   Alerts.add('success', 'Logged out!');
  //   $state.reload();
  // }