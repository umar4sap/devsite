'use strict';

angular.module('myApp.login', ['ngRoute','angular-storage', 'angular-jwt','auth0'])




    .config(['$routeProvider','authProvider', '$httpProvider', '$locationProvider',
        'jwtInterceptorProvider', function($routeProvider,authProvider, $httpProvider, $locationProvider,
                                        jwtInterceptorProvider) {

            authProvider.init({
                domain: 'veegamgithub.auth0.com',
                clientID: 'M0Kfe0HEm0E4OlhJdl39OfHxOAQU1VJB'

            });
            authProvider.on('loginSuccess', function($location, profilePromise, idToken, store,$rootScope) {
                console.log("Login Success");
                profilePromise.then(function(profile) {
                    $rootScope.profile=profile;
                    store.set('profile', profile);
                    store.set('token', idToken);
                });
                $location.path('/success');
            });

            authProvider.on('loginFailure', function() {
                alert("Error");
            });

            authProvider.on('authenticated', function($location) {
                console.log("Authenticated");

            });

            jwtInterceptorProvider.tokenGetter = function(store) {
                return store.get('token');
            };

            // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
            // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
            // want to check the delegation-token example
            $httpProvider.interceptors.push('jwtInterceptor');


    }])   .run(function($rootScope, auth, store, jwtHelper, $location) {
    $rootScope.$on('$locationChangeStart', function() {

        var token = store.get('token');
        if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
                if (!auth.isAuthenticated) {
                    auth.authenticate(store.get('profile'), token);

                }
            } else {
                // Either show the login page or use the refresh token to get a new idToken
                $location.path('/');
            }
        }

    });
})

    .controller('LoginCtrl', ['$scope','auth','$rootScope',function ( $scope, auth, $rootScope) {

        $scope.auth = auth;



}]);
