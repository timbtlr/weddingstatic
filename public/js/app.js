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
        'RsvpCtrl',
        'PhotoService',
        'RegistryService',
        'RSVPService',
        'envConfig'
    ])
    .config(function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    });