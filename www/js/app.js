// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
window.app = angular.module('app', ['ionic', 'ionic.utils'])
  .run(function ($ionicPlatform, $ionicHistory) {
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
        if (prompt("are you sure?")) {
          navigator.app.exitApp();
        }
      } else {
        $ionicHistory.goBack();
      }
    }, 100);
  });
