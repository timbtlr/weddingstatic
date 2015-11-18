/*
Name:
    appRoutes

Description:


Author:
    Tim "KetsuN" Butler
*/
angular
    .module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        //  Home view
        .when('/', {
            templateUrl: '/templates/home.html'
        })

        //  Query view
        .when('/about/', {
            templateUrl: '/templates/about.html'
        })

        //  photo view
        .when('/photos', {
            templateUrl: '/templates/photos.html',
            controller: 'PhotoController'
        })

        //  rsvp view
        .when('/rsvp/', {
            templateUrl: 'templates/rsvp.html'
            //controller: 'RsvpController'
        })

        //  registry view
        .when('/registry', {
            templateUrl: 'templates/registry.html',
            controller: 'RegistryController'
        })

        //  admin view
        .when('/admin', {
            templateUrl: 'templates/admin.html'
        })

        //  Redirect incorrect navigation to the default (Home) view
        .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(false).hashPrefix('!');;
}]);