(function(){
  angular.module('Roundup')
  .component('userLoginForm', {
    templateUrl: 'js/app/components/userLoginForm/userLoginForm.html',
    controller: UserLoginForm
    //controllerAs: 'userForm'
  });

  function UserLoginForm($state, UserService){
    console.log('you have made it');
    // var userForm = this;
    // userForm.users = [];
    // userForm.newUser = {
    //  firstName: '',
    //  lastName: '',
    //  title: '',
    //  email: '',
    //  password: ''
    //}

    // userForm.submitUser = function(){
        
    //  UserService.addUser(userForm.newUser, function(res) {
    //   UserService.getAllUsers(function(data) {
    //     userForm.users = data.data;
    //     $state.go('home', {}, {reload : true});
    //   });
    // });
 //  }
  }
 
  UserLoginForm.$inject = ['$state','UserService'];
})()