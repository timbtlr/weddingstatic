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
            templateUrl: 'templates/home.html'
        })

        //  About view
        .when('/about/', {
            templateUrl: 'templates/about.html'
        })

        //  Admin view
        .when('/admin/', {
            templateUrl: 'templates/admin.html'
        })

        //  Photo view
        .when('/photos', {
            templateUrl: 'templates/photos.html',
            controller: 'PhotoController'
        })

        //  Rsvp view
        .when('/rsvp/', {
            templateUrl: 'templates/rsvp.html'
            //controller: 'RsvpController'
        })

        //  Registry view
        .when('/registry', {
            templateUrl: 'templates/registry.html',
            controller: 'RegistryController'
        })

        //  Redirect incorrect navigation to the default (Home) view
        .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(false).hashPrefix('!');;
}]);
