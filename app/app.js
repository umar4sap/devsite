'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.layout',
  'myApp.version',
  'ngMaterial', 'ngCookies','myApp.login','auth0'
]).
config([
  '$locationProvider',
  '$routeProvider',
  '$mdThemingProvider',
  '$mdIconProvider',
  function(
      $locationProvider,
      $routeProvider,
      $mdThemingProvider,
      $mdIconProvider
  ) {
    $mdIconProvider.fontSet('md', 'material-icons');
    $mdThemingProvider.theme('default').dark();

    $routeProvider.otherwise({redirectTo: '/components/login'});
  }]);
