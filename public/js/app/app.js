angular.module('Roundup', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/'); // usually goes to a 404 route

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'js/app/views/home.html',
		// controller: 'HomeCtrl'
	})
	.state('candidates', {
    	url: '/candidates',
    	templateUrl: 'js/app/views/candidates.html',
    // controller: ''
  	})
  	.state('signup', {
    	url: '/signup',
    	templateUrl: 'js/app/views/signup.html',
    // controller: 'PollCtrl'
  	});
	// .state('post', {
	// 	url: '/post/:id',
	// 	templateUrl: 'app/views/post.html',
	// 	controller: 'PostCtrl'
	// })
	// .state('edit-post', {
	// 	url: '/post/:id/edit',
	// 	templateUrl: 'app/views/post_edit.html',
	// 	controller: 'PostCtrl'
	// });

	$locationProvider.html5Mode(true);

}]); 