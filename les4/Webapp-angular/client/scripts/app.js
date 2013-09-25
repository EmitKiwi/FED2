var APP = angular.module('APP', []);

APP.config(function ($routeProvider) {
	$routeProvider.
		when('/', {
			controller: 'teamController',
			templateUrl: 'views/team.html'
		}).
		when('/game', {
			controller: 'gameController',
			templateUrl: 'views/game.html'
		}).
		when('/pools', {
			controller: 'poolController',
			templateUrl: 'views/pool.html'
		}).
		otherwise({
			redirectTo: '/'
		});
});