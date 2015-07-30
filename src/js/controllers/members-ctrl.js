/**
 * Members Controller
 */

angular.module('mission-control')
  .controller('MembersCtrl', ['$scope', 'Members', MembersCtrl]);

function MembersCtrl($scope, Members) {
  Members.get(function (responseData) {
    $scope.members = responseData;
    console.log($scope.members.data);
  })
}
