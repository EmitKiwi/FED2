APP.factory('Game', function ($http) {
	var tournamentId = '19389';
	//dca06c9906
	//Jip zijn accesToken: 78b1a39e18
	var accessToken = '78b1a39e18';
	var clientId = '919fbbe13a1747ce4d4a37ad5d9358';
	var clientSecret = 'e927cdcf291f43f0897331b63ca5f6';
	return {
		getAllGameScores: function (callback) {
			var url = 'https://api.leaguevine.com/v1/game_scores/?tournament_id='+ tournamentId + '&fields=%5Bteam_1_score%2C%20team_2_score%2C%20team_1%2C%20team_2%5D&access_token=' + accessToken;
		 	$http.get(url, {cache: true} ).success(callback);
		},
		getAllGames: function (callback) {
			var url = 'https://api.leaguevine.com/v1/games/?tournament_id='+ tournamentId + '&fields=%5Bid%2C%20team_1%2C%20team_2%5D&access_token=' + accessToken;
			$http.get(url, {cache: true} ).success(callback);
		},
		getAllTeams: function (callback){
			var url = 'https://api.leaguevine.com/v1/tournament_teams/?tournament_ids=%5B'+ tournamentId + '%5D&order_by=%5Bseed%5D&fields=%5Bseed%2C%20team%5D&limit=30&access_token=' + accessToken;
			$http.get(url, {cache: true} ).success(callback);
		},
		getAllPoolScores: function (callback) {
			var url = 'https://api.leaguevine.com/v1/pools/?tournament_id='+ tournamentId + '&limit=100&access_token='+ accessToken;
			$http.get(url, {cache: true} ).success(callback);
		},
		/*getAccessToken: function (callback) {
			var url = 	'https://www.leaguevine.com/oauth2/token/?client_id=' + clientId +
						'&client_secret=' + clientSecret + 
						'&grant_type=client_credentials&scope=universal';
			delete $http.defaults.headers.common['X-Requested-With'];
			$http.get(url).success(callback);

		},*/	 
		postGameScore: function (post, callback){
			
			//this.getAccessToken(function (data) {
			//	console.log(data);
			// });

			var url = 'https://api.leaguevine.com/v1/game_scores/?access_token=' + accessToken + '?callback?';
			$http.post(url , post, {headers: {'Authorization': 'bearer ' + accessToken}}).success(callback);
			console.log(post);
		}
	}
});