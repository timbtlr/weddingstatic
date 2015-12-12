'use strict';

angular
    .module('MainApplication', [
        'ui.bootstrap',
        'ngRoute',
        'appRoutes',
        'HomeCtrl',
        'PhotoCtrl',
        'RegistryCtrl',
        'PhotoService',
        'RegistryService',
        'envConfig'
    ]);