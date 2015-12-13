angular
    .module('RegistryService', [])
    .factory('registryServiceFactory', ['$http', 'ENV', function($http, ENV) {
        var get_registry_items = {
            method: 'GET',
            url: ENV.weddingApiUrl.concat('/registry-items/'),
            headers: {
                'Authorization': ENV.weddingApiKey
            }
        }

        return {
            get : function() {
                return $http(get_registry_items);
            }
        }
    }])