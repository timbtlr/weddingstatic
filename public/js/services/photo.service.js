angular
    .module('PhotoService', [])
    .factory('Photo', function($resource, ENV) {
        return $resource(
            ENV.weddingApiUrl.concat('/photos/:id'),
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            }
        );
    });