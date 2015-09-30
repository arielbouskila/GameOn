app.controller("teamController",['$scope','$localstorage','$location','sharedPropertiesService',function($scope,$localstorage,$location,sharedPropertiesService){
  $scope.config = sharedPropertiesService.getProperty();
  $scope.shuffle = function(){

    var config = {
      numberOfPlayers: $scope.config.playersList.length,
      numberOfPlayersInTeam: $scope.config.numberOfPlayersInTeam,
      teams: []
    };

    function shufflePlayers(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

    function getPlayersInSameRank(rank) {
      var returnList = [];
      for (var i = 0; i < $scope.config.playersList.length; i++) {
        (parseInt($scope.config.playersList[i].rank) === rank) && returnList.push($scope.config.playersList[i]);
      }
      return shufflePlayers(returnList);
    }

    function inArray(array, item) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
          return true;
        }
      }
      return false;
    }

    function shuffle() {
      //sort the list by rank
      $scope.config.playersList.sort(function(a, b) {
        return parseInt(a.rank) - parseInt(b.rank);
      });
      var numberOfTeams = Math.ceil(config.numberOfPlayers / config.numberOfPlayersInTeam);
      var numberOfRounds = 1;
      var numberOfRoundsInRound = [];
      for (var i = 0; i < numberOfTeams; i++) {
        config.teams[i] = {
          teamNumber: i+1,
          teamPlayers: []
        }
      }
      for (var j = 1; j <= parseInt($scope.config.playersList[$scope.config.playersList.length - 1].rank); j++) {
        var playersInSameRank = getPlayersInSameRank(j);
        for (var k = 0; k < playersInSameRank.length; k++) {
          var player = playersInSameRank[k];
          var teamNumber = Math.floor(Math.random() * config.teams.length);
          while (inArray(numberOfRoundsInRound, teamNumber)) {
            teamNumber = Math.floor(Math.random() * config.teams.length);
          }
          config.teams[teamNumber].teamPlayers.push(player);
          if (numberOfRounds === numberOfTeams) {
            numberOfRoundsInRound = [];
            numberOfRounds = 1;
          } else {
            numberOfRoundsInRound.push(teamNumber);
            numberOfRounds = numberOfRounds + 1;
          }
        }
      }
      return config.teams;
    }

    var teams = shuffle();

    if(teams.length){
      sharedPropertiesService.setTeam(teams);
      $location.path("/results")
    }
  };
}]);
