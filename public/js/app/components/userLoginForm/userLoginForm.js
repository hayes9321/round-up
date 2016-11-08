(function(){
  angular.module('Roundup')
  .component('userLoginForm', {
    templateUrl: 'js/app/components/userLoginForm/userLoginForm.html',
    controller: UserLoginForm,
    controllerAs: 'userLoginForm'
  });

  function UserLoginForm($http, $state, $location, Auth, Alerts){
    console.log('you have made it');
    var userLoginForm = this;
    
    userLoginForm.user = {
     email: '',
     password: ''
    };

    userLoginForm.userLogin = function(){
      $http.post('/api/auth', userLoginForm.user).then(function success(res) {
        console.log(userLoginForm.user);
        console.log(res);
        console.log(res.data);
        Auth.saveToken(res.data.token);
        Alerts.add('success', 'Logged in!');
        console.log('Token:', res.data.token);
        $location.path('/');
      }, function error(res) {
        Alerts.add('danger', 'Incorrect email/password');
        console.log(res);
      });
      console.log('clicked');
    }
  }
 
  UserLoginForm.$inject = ['$http','$state', '$location', 'Auth','Alerts'];
})()

