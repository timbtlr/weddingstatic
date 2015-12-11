angular
    .module('PhotoService', [])
    .factory('photoServiceFactory', ['$http', 'ENV', function($http, ENV) {
        var get_photos = {
            method: 'GET',
            url: ENV.weddingApiUrl.concat('/photos/'),
            headers: {
                'Authorization': ENV.weddingApiKey
            }
        }

        return {
            get : function() {
                return $http(get_photos);
            }
        }
    }])