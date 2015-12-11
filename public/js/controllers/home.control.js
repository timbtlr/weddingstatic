/*
Name:
    home.control

Description:
    Controls the content of the home view.  Currently no dynamic content is required for the home view.

Author:
    Tim "KetsuN" Butler
*/

angular
    .module('HomeCtrl', [])
    .controller('HomeController', function($scope, photoServiceFactory) {
        //  Heroku has a tendency to idle when not in use.
        //  This simple query to the API attempts to ensure that by the time
        //  a user attempts a "useful" query that the app will no longer be idle.
        $scope.queryForPhotos = function() {
            photoServiceFactory.get().then(function(result) {
            })
        }
});