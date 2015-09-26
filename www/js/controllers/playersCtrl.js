app.controller("playersController", ['$scope', '$localstorage', '$ionicListDelegate', function ($scope, $localstorage, $ionicListDelegate) {
  $scope.players = [];
  $scope.isNewPlayerActive = false;
  $scope.addPlayerClicked = function () {
    $scope.model.newPlayer = "";
    $scope.isNewPlayerActive = true;
  };
  $scope.model = {};
  $scope.addPlayer = function () {
    var id = $scope.players.length;
    $scope.players.push({
      id: id,
      name: $scope.model.newPlayer,
      selected: false
    });
    $scope.model.newPlayer = "";
    $scope.isNewPlayerActive = false;
  };
  $scope.editPlayer = function (player) {
    player.isPlayerEdited = true;
    $ionicListDelegate.closeOptionButtons();
  };
  $scope.editPlayerSave = function (player) {
    player.isPlayerEdited = false;
  };
  $scope.deletePlayer = function (player) {
    var index = $scope.players.indexOf(player);
    $scope.players.splice(index, 1);
  };
  //$localstorage.setObject("players",players);
  $scope.players = ($localstorage.getObject("players") && $localstorage.getObject("players").length) ? $localstorage.getObject("players") : [];

}]);
