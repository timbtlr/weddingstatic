angular
    .module('RSVPService', [])
    .factory('Invitation', function($resource, ENV) {
        return $resource(
            ENV.weddingApiUrl.concat('/invitations/:id/'),
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: false,
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': ENV.weddingApiKey
                    }
                },
                'update': {
                    method: 'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': ENV.weddingApiKey
                    }
                }
            }
        );
    })
    .factory('InvitationSearch', function($resource, ENV) {
        return $resource(
            ENV.weddingApiUrl.concat('/invitations?search=:name'),
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: false,
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': ENV.weddingApiKey
                    }
                }
            }
        );
    })
    .factory('Invitee', function($resource, ENV) {
        return $resource(
            ENV.weddingApiUrl.concat('/invitees/:id/'),
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: false,
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': ENV.weddingApiKey
                    }
                },
                'update': {
                    method: 'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': ENV.weddingApiKey
                    }
                }
            }
        );
    });