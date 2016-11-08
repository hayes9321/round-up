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
  	})
  	.state('interview', {
    	url: '/interview',
    	templateUrl: 'js/app/views/interview.html',
  	})
    .state('roundReview', {
      url: '/review',
      templateUrl: 'js/app/views/roundReview.html',
    })
    .state('modal', {
      url: '/modal',
      templateUrl: 'js/app/views/modal.html',
    });





	$locationProvider.html5Mode(true);

}]); 