APP.factory('Game', function ($http) {
	return {
		getAllGameScores: function (callback) {
			var url = 'https://api.leaguevine.com/v1/game_scores/?tournament_id=18519&fields=%5Bteam_1_score%2C%20team_2_score%2C%20team_1%2C%20team_2%5D&access_token=ccfdb59215';
		 	$http.get(url, {cache: true} ).success(callback);
		}, 
		getAllTeams: function (callback){
			var url = 'https://api.leaguevine.com/v1/tournament_teams/?tournament_ids=%5B18519%5D&order_by=%5Bseed%5D&fields=%5Bseed%2C%20team%5D&limit=30';
			$http.get(url, {cache: true} ).success(callback);
		},
		getAllPoolScores: function (callback) {
			var url = 'https://api.leaguevine.com/v1/pools/?tournament_id=18519&limit=100&access_token=ccfdb59215';
			$http.get(url, {cache: true} ).success(callback);
		}
	}
});