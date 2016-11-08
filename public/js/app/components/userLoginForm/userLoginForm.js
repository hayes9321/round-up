(function(){
  angular.module('Roundup')
  .component('userLoginForm', {
    templateUrl: 'js/app/components/userLoginForm/userLoginForm.html',
    controller: UserLoginForm,
    controllerAs: 'userLoginForm'
  });

  function UserLoginForm($state, UserService){
    console.log('you have made it');
    var userLoginForm = this;
    
    userLoginForm.newUser = {
     email: '',
     password: ''
    }

    userLoginForm.authUser = function(){
      UserService.getAllUsers(function(data) {
         userLoginForm.users = data.data;
      //   $state.go('home', {}, {reload : true});
      // });
      console.log('clicked');
    }
  }
 
  UserLoginForm.$inject = ['$state','UserService'];
})()