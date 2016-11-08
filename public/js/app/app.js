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
<<<<<<< HEAD
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
	});
=======
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




>>>>>>> 477077986fe2ed0ff438f1d671c96380be52a7f6

	$locationProvider.html5Mode(true);

}]); 