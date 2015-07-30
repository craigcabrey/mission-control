/**
 * Members Controller
 */

angular.module('mission-control')
  .controller('MembersCtrl', ['$scope', 'Members', MembersCtrl]);

function MembersCtrl($scope, Members) {
  getMembers();

  $scope.pagination = {
    per_page: null,
    current_page: null,
    last_page: null,
    next_page_url: null,
    prev_page_url: null,
    from: null,
    to: null
  };

  function getMembers() {
    Members.get(function (responseData) {
      $scope.members = responseData.data;
      $scope.totalMembers = responseData.total;
    })
  }


}
