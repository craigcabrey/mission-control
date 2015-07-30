/**
 * Members Controller
 */

angular.module('mission-control')
  .controller('MembersCtrl', ['$scope', 'Members', MembersCtrl]);

function MembersCtrl($scope, Members) {
  getMembers();

  $scope.members = {};

  function getMembers() {
    Members.get(function (responseData) {
      $scope.membersList = responseData.data;
      $scope.members = responseData;
    })
  }


  $scope.getMembersPage = function (page) {
    console.log('trying ot get page:', page);
    Members.get({page: page}, function (responseData) {
      $scope.members = responseData;
      $scope.membersList = responseData.data;
    })
  };


}
