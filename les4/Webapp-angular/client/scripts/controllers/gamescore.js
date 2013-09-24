APP.controller('gameScore', function ($scope, Tournament) {
	Tournament.getGameData().then(function(data){
		console.log(data);
	});
})