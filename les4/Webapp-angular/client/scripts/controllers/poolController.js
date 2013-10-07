APP.controller('poolController', function ($scope, Game) {
	$scope.pageName = "Pools";
	Game.getAllPoolScores(function (data) {
		$scope.pools = data.objects;
		setFinal(data.objects);
	})

	var setFinal = function (data) {
	
	}
})