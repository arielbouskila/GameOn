app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'templates/playersList.html',
      controller: 'playersController'
    })
    .state('team', {
      url: '/team',
      templateUrl: 'templates/team.html',
      controller: 'teamController'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'templates/results.html',
      controller: 'resultController'
    });
  $urlRouterProvider.otherwise('/');
});
