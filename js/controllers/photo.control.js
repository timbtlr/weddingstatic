/*
Name:
    home.control

Description:
    Controls the content of the photo view.

Author:
    Tim "KetsuN" Butler
*/

angular
    .module('PhotoCtrl', [])
    .controller('PhotoController', function($scope, photoServiceFactory) {
        $scope.photo_list = [];

        $scope.queryForPhotos = function() {
            photoServiceFactory.get().then(function(result) {
                $scope.photo_list = result.data.data;
            })
        }

        $scope.setCurrentImage = function(image) {
            $scope.current_image = image;
        };

        //  Query for all photos
        $scope.queryForPhotos();

        // initial image index
        $scope.current_image = $scope.photo_list[0];
});