APP.controller('teamController', function ($scope, Game) {
	$scope.pageName = "Teams";
	Game.getAllTeams(function (data) {
		$scope.teams = data.objects;
	})
})
