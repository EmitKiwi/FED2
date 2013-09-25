APP.controller('gameController', function ($scope, Game) {
	$scope.pageName = "Games";
	Game.getAllGameScores(function (data) {
		$scope.games = data.objects;
	});	
})