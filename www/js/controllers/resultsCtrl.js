app.controller("resultController", ['$scope', '$localstorage','$location','sharedPropertiesService', function ($scope, $localstorage,$location,sharedPropertiesService) {
  $scope.teams = sharedPropertiesService.getTeam();
  $scope.share = function() {
    var strResult = "\n\n";
    for (var i = 0; i < $scope.teams.length; i++) {
      var team = $scope.teams[i];
      var teamPlayers = [];
      strResult +=  "Team " + (team.teamNumber);
      strResult += "\n------\n";
      for (var j = 0; j < team.teamPlayers.length; j++) {
        var player = team.teamPlayers[j];
        var strPlayer = player.name;
        /*if ($scope.showRank) {
          strPlayer += "\t" + player.rank;
        }*/
        teamPlayers.push(strPlayer);
      }
      strResult += teamPlayers.join("\n");
      strResult += "\n\n";
    }
    window.plugins.socialsharing.shareViaWhatsApp('GameOn - ', null /* img */, strResult, null, function(errormsg){alert("Error: Cannot Share")});
  };
}]);
