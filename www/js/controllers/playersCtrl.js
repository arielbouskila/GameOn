app.controller("playersController", ['$scope', '$localstorage', '$ionicListDelegate', '$location', 'sharedPropertiesService', function ($scope, $localstorage, $ionicListDelegate, $location, sharedPropertiesService) {
  $scope.players = $localstorage.getObject("players") ? $localstorage.getObject("players") : [];
  $scope.isNewPlayerActive = false;
  $scope.isEditPlayerActive = false;
  $scope.selectedPlayers = [];
  $scope.addPlayerClicked = function () {
    $scope.model.newPlayer = "";
    $scope.isNewPlayerActive = true;
  };
  $scope.model = {};

  $scope.editPlayerModeOn = function (player) {
    player.isPlayerEdited = true;
    $scope.isEditPlayerActive = true;
    $ionicListDelegate.closeOptionButtons();
  };

  $scope.selectPlayer = function () {
    $scope.selectedPlayers = [];
    for (var i = 0; i < $scope.players.length; i++) {
      if ($scope.players[i].selected) {
        $scope.selectedPlayers.push($scope.players[i]);
      }
    }
  };

  $scope.nextToRankPage = function () {
    var config = {};
    var tempSelected = [];
    for (var i = 0; i < $scope.players.length; i++) {
      if ($scope.players[i].selected) {
        tempSelected.push($scope.players[i]);
      }
    }
    config.playersList = tempSelected;
    config.numberOfPlayersInTeam = $scope.model.numberOfPlayersInTeam;
    sharedPropertiesService.setProperty(config);
    $location.path('/team');
  };

  $scope.addPlayer = function () {
    var id = $scope.players.length;
    $scope.players.push({
      id: id,
      name: $scope.model.newPlayer,
      selected: false,
      rank: ""
    });
    $scope.model.newPlayer = "";
    $scope.isNewPlayerActive = false;
    saveList();
  };

  $scope.editPlayerSave = function (player) {
    player.isPlayerEdited = false;
    $scope.isEditPlayerActive = false;
    saveList();
  };

  $scope.deletePlayer = function (player) {
    var index = $scope.players.indexOf(player);
    $scope.players.splice(index, 1);
    saveList();
  };

  function saveList() {
    $localstorage.setObject("players", $scope.players);
  }

  $scope.players = ($localstorage.getObject("players") && $localstorage.getObject("players").length) ? $localstorage.getObject("players") : [];

}]);
