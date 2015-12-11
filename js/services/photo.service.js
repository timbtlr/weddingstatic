angular
    .module('PhotoService', [])
    .factory('photoServiceFactory', ['$http', function($http) {
        return {
            get : function() {
                return $http.get('https://agile-hamlet-2538.herokuapp.com/photos/');
            }
        }
    }])