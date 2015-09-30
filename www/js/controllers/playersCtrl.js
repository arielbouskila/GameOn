app.controller("playersController", ['$scope', '$localstorage', '$ionicListDelegate', '$location', 'sharedPropertiesService', function ($scope, $localstorage, $ionicListDelegate, $location, sharedPropertiesService) {
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

  $scope.selectPlayer = function (savePlayers) {
    $scope.selectedPlayers = [];
    for (var i = 0; i < $scope.players.length; i++) {
      if ($scope.players[i].selected) {
        $scope.selectedPlayers.push($scope.players[i]);
      }
    }
    savePlayers && saveList();
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
    sharedPropertiesService.setProperty(config);
    $location.path('/team');
  };

  $scope.addPlayer = function () {
    var id = $scope.players.length;
    $scope.players.push({
      name: $scope.model.newPlayer,
      selected: false,
      rank: 1
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
    var playersToSave = [];
    for (var i = 0; i < $scope.players.length; i++) {
      playersToSave.push({
        name: $scope.players[i].name,
        selected: $scope.players[i].selected,
        rank: 1
      });
    }
    $localstorage.setObject("players", playersToSave);
  }

  $scope.players = ($localstorage.getObject("players") && $localstorage.getObject("players").length) ? $localstorage.getObject("players") : [];
  $scope.selectPlayer();
}]);
