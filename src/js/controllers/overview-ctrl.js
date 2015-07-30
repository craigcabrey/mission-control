/**
 * Overview Controller
 */

angular.module('mission-control')
  .controller('OverviewCtrl', ['$scope', 'Members', OverviewCtrl]);

function OverviewCtrl($scope, Members) {
  $scope.events = {
    total: 10
  };

  $scope.members = {
    searchQuery: '',
    total: 0,
    data: []
  };

  $scope.sponsors = {
    total: 10
  };

  $scope.tasks = {
    total: 50
  };

  /* Getting Member Data */
  Members.get(function (data) {
    $scope.members.total = data.total;
    $scope.members.data = data.data;
  });

}
