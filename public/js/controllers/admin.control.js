/*
Name:
    admin.control

Description:
    Controls the admin section of the app.  The user must log in using a password specified by the adminPassword
    environment variable.

Author:
    Tim "KetsuN" Butler
*/

angular
    .module('AdminCtrl', ['ngRoute'])
    .controller('AdminController', ['$scope', 'Invitation', 'Invitee', 'NgTableParams', 'ENV', function($scope, Invitation, Invitee, NgTableParams, ENV) {

    $scope.invitation = null;
    $scope.error_response = "";
    $scope.success_response = "";
    $scope.user_logged_in = false;
    $scope.rsvp_submitted = false;
    $scope.invitees = [];
    $scope.numberAttending = 0;

    $scope.adminSetup = function() {
        return ENV.adminPassword != null;
    };

    $scope.login = function(password) {
        $scope.success_response = ""
        if (password == null) {
            $scope.error_response = "You must provide a password"
        } else if (password == ENV.adminPassword) {
            $scope.user_logged_in = true;

            Invitation.query({},
                function(result) {
                    $scope.tableParams = new NgTableParams({}, { data: result.data});
                },
                function() {
                    $scope.error_response = "Could not query for invitations"
                });


            Invitee.query({},
                function(result) {
                    $scope.inviteeTableParams = new NgTableParams({}, { data: result.data});

                    for (i = 0; i < result.data.length; i++) {
                        if (result.data[i].attending == true) {
                            $scope.numberAttending += 1;
                        }
                    }
                },
                function() {
                    $scope.error_response = "Could not query for invitees"
                });

        } else {
            $scope.error_response = "Incorrect password"
        };
    };


    $scope.update_invitation = function() {
        Invitation.update({id: $scope.invitation.id}, $scope.invitation);

        for (i = 0; i < $scope.invitees.length; i++) {
            Invitee.update({id: $scope.invitees[i].id}, $scope.invitees[i]);
        };

        $scope.rsvp_submitted = true;
        $scope.success_response = "Get ready to party, your RSVP has been updated!"
    };
}]);