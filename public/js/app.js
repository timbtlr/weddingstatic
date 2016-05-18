'use strict';

angular
    .module('MainApplication', [
        'ui.bootstrap',
        'ngRoute',
        'ngResource',
        'ngTable',
        'appRoutes',
        'HomeCtrl',
        'PhotoCtrl',
        'RegistryCtrl',
        'RsvpCtrl',
        'AdminCtrl',
        'PhotoService',
        'RegistryService',
        'RSVPService',
        'envConfig'
    ])
    .config(function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    });