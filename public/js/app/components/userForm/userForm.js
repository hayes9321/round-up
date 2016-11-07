(function(){
	angular.module('Roundup')
	.component('userForm', {
		templateUrl: 'js/app/components/userForm/userForm.html',
		controller: UserForm
		//controllerAs: 'userForm'
	});

	function UserForm($state, UserService){
		console.log('you have made it');
		// var userForm = this;
		// userForm.users = [];
		// userForm.newUser = {
		// 	firstName: '',
		// 	lastName: '',
		// 	title: '',
		// 	email: '',
		// 	password: ''
		//}

		// userForm.submitUser = function(){
			
		// UserService.addUser(userForm.newUser, function(res) {
  //       UserService.getAllUsers(function(data) {
  //         userForm.users = data.data;
  //         $state.go('home', {}, {reload : true});
  //       });
  //     });
	 //  }
	}
 
	UserForm.$inject = ['$state','UserService'];
})()