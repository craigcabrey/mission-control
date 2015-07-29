/**
 * Members Controller
 */

angular.module('mission-control')
    .controller('MembersCtrl', ['$scope', '$http', MembersCtrl]);

function MembersCtrl($scope, $http) {
    $http.get('http://vm01.craigcabrey.com:8000/api/v1/members')
        .success(function(result, status, headers, config) {
            $scope.members = result.data;
        });
}
