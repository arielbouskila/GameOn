app.controller("playersController", ['$scope', '$localstorage', '$ionicListDelegate','$location','sharedPropertiesService', function ($scope, $localstorage, $ionicListDelegate,$location,sharedPropertiesService) {
  $scope.players = $localstorage.getObject("players") ? $localstorage.getObject("players") :  [];
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
      selected: false,
      rank:""
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
  $scope.save = function(){
    $localstorage.setObject("players",$scope.players);
  };
  $scope.select = function(){
    var tempSelected = [];
    for(var i=0;i<$scope.players.length;i++){
      if($scope.players[i].selected){
        tempSelected.push($scope.players[i]);
      }
    }
    sharedPropertiesService.setProperty(tempSelected);
    console.log(sharedPropertiesService.getProperty());
    $location.path('/team');


  }

  $scope.players = ($localstorage.getObject("players") && $localstorage.getObject("players").length) ? $localstorage.getObject("players") : [];

}]);
