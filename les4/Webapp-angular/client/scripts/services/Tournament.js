APP.factory('Tournament', function($http) {
	return {
		getGameData: function(result) {
			return $http.get('https://api.leaguevine.com/v1/tournament_teams/?tournament_ids=%5B18519%5D').then(function(result){
				return result.data;
			});
		}
	}
});