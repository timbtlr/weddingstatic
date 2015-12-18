'use strict';

angular
    .module('MainApplication', [
        'ui.bootstrap',
        'ngRoute',
        'ngResource',
        'appRoutes',
        'HomeCtrl',
        'PhotoCtrl',
        'RegistryCtrl',
        'PhotoService',
        'RegistryService',
        'envConfig'
    ]);