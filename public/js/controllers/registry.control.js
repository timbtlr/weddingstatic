angular
    .module('RegistryCtrl', [])
    .controller('RegistryController', function($scope, registryServiceFactory) {
        $scope.queryForItems = function() {
            registryServiceFactory.get().then(function(result) {
                $scope.registry_list = result.data.data;
            })
        };

        $scope.queryForItems();
});
