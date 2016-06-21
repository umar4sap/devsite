'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.layout',
  'myApp.version',
  'ngMaterial',
  'ngCookies',
  'myApp.login',
  'auth0',
    'ui.router'
]).
config([
  '$locationProvider',
  '$routeProvider',
  '$mdThemingProvider',
  '$mdIconProvider',
  '$stateProvider',
  '$urlRouterProvider',
  function(
      $locationProvider,
      $routeProvider,
      $mdThemingProvider,
      $mdIconProvider,
      $stateProvider,
      $urlRouterProvider
  ) {
    $mdIconProvider.fontSet('md', 'material-icons');
    $mdThemingProvider.theme('default').dark();

    $routeProvider.otherwise({redirectTo: '/components/login'});

    $stateProvider
        .state('templates', {
          //url: '/templates',
            views: {
                "w1": {
                    templateUrl: 'components/templates/templates.tpl.html'
                }
            }
        })
        .state('templatesdescription', {
            //url: '/templates',
            views: {
                "w1": {
                    templateUrl: 'components/templates/templates.tpl.html'
                },
                "w2": {
                    templateUrl: 'components/templates/templates-desc.tpl.html'
                },
                "w3": {
                    templateUrl: 'components/templates/templates-json.tpl.html'
                }
            }
        })
        .state('settings.profile', {
          url: '/profile',
          templateUrl: 'templates/profile.html',
          controller: 'ProfileController'
        })
        .state('settings.account', {
          url: '/account',
          templateUrl: 'templates/account.html',
          controller: 'AccountController'
        });
    //$urlRouterProvider.otherwise('/components/login');
  }]);
