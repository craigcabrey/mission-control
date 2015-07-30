/**
 * Members Controller
 */

angular.module('mission-control')
  .controller('MembersCtrl', ['$scope', 'Members', MembersCtrl]);

function MembersCtrl($scope, Members) {
  $scope.members = {};
  $scope.getMembers = function (page) {
    Members.get({page: page}, function (responseData) {
      $scope.members = responseData;
      $scope.membersList = responseData.data;
    })
  };
  
  /* Initialize members */
  $scope.getMembers();


}
