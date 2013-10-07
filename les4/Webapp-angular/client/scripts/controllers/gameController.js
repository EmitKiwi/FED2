APP.controller('gameController', function ($scope, Game) {
	$scope.pageName = "Games";
	Game.getAllGames(function (data) {
		$scope.games = data.objects;
	});	

	$scope.submit = function (post, id){
		post.game_id = id;
		Game.postGameScore(post , function (data) {
		});
	}
})