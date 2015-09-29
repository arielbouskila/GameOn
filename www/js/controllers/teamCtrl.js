app.controller("teamController",['$scope','$localstorage','sharedPropertiesService',function($scope,$localstorage,sharedPropertiesService){
  $scope.selectedPlayers = sharedPropertiesService.getProperty();
  console.log(sharedPropertiesService.getProperty());
  if($scope.selectedPlayers.length > 0){
    console.log($scope.selectedPlayers[0]);
  }
}]);
