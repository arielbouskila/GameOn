// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
window.app = angular.module('app', ['ionic', 'ionic.utils'])
  .run(function ($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      //if(window.StatusBar) {
      //  StatusBar.styleDefault();
      //}
    });
    $ionicPlatform.registerBackButtonAction(function () {
      if (location.hash === '#/') {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Really???',
          template: 'Are you really want to exit???'
        });
        confirmPopup.then(function(res) {
          !!res && navigator.app.exitApp();
        });
      } else {
        window.history.go(-1);
      }
    }, 100);
  });
