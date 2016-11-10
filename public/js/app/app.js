angular.module('Roundup', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/'); // usually goes to a 404 route

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'js/app/views/home.html',
	})
	.state('candidates', {
  	url: '/candidates',
  	templateUrl: 'js/app/views/candidates.html',
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
  .state('users', {
    url: '/users',
    templateUrl: 'js/app/views/users.html'
  })
  .state('questions', {
    url: '/questions',
    templateUrl: 'js/app/views/questions.html',
  })
  .state('rounds', {
    url: '/rounds',
    templateUrl: 'js/app/views/rounds.html',
    controller: 'RoundCtrl'
  })
  .state('createRound', {
    url: '/create-round',
    templateUrl: 'js/app/views/createRound.html',
    controller: 'RoundCtrl'
  })
  .state('editRound', {
    url: '/round/:id',
    templateUrl: 'js/app/views/editRound.html',
    controller: 'EditRoundCtrl'
  })
  .state('modal', {
    url: '/modal',
    templateUrl: 'js/app/views/modal.html',
  })
  .state('positions',{
    url: '/positions',
    templateUrl: 'js/app/views/positions.html'
  });

	$locationProvider.html5Mode(true);

}]); 