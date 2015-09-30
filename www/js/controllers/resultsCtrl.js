app.controller("resultController", ['$scope', '$localstorage','$location','sharedPropertiesService', function ($scope, $localstorage,$location,sharedPropertiesService) {
  $scope.teams = sharedPropertiesService.getTeam();
}]);
