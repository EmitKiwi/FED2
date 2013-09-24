var APP = angular.module('APP', []);

APP.config(function ($routeProvider) {
	$routeProvider.
		when('/', {
			controller: 'gameScore',
			templateUrl: 'views/game.html'
		}).
		when('/ranking', {
			controller: 'ranking',
			templateUrl: 'views/ranking.html'
		}).
		otherwise({
			redirectTo: '/'
		});
});