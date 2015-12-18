angular
    .module('RegistryService', [])
    .factory('Registry', function($resource, ENV) {
        return $resource(
            ENV.weddingApiUrl.concat('/registry-items/:id'),
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            }
        );
    });