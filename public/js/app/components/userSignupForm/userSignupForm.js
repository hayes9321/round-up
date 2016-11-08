(function(){
  angular.module('Roundup')
  .component('userSignupForm', {
    templateUrl: 'js/app/components/userSignupForm/userSignupForm.html',
    controller: UserSignupForm
    //controllerAs: 'userForm'
  });

  function UserSignupForm($state, UserService){
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
    //    UserService.getAllUsers(function(data) {
    //       userForm.users = data.data;
    //      $state.go('home', {}, {reload : true});
    //    });
    //  });
    // }
  }

  UserSignupForm.$inject = ['$state','UserService'];  
})()