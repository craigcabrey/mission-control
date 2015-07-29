/**
 * Members Controller
 */

angular.module('mission-control')
  .controller('MembersCtrl', ['$scope', 'Members', MembersCtrl]);

function MembersCtrl($scope, Members) {
  Members.get(function (data) {
    $scope.members = data;
    console.log(data);
  });
}
