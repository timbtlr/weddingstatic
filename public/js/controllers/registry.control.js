angular
    .module('RegistryCtrl', [])
    .controller('RegistryController', function($scope, Registry) {
        Registry.query().$promise.then(function(result) {
            $scope.registry_list = result.data;
        });
    });
