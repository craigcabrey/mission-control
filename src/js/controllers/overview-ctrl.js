/**
 * Overview Controller
 */

angular.module('mission-control')
  .controller('OverviewCtrl', ['$scope', '$http', OverviewCtrl]);

function OverviewCtrl($scope, $http) {
  $scope.events = {
    total: 10
  };

  $scope.members = {
    total: 20
  };

  $scope.sponsors = {
    total: 10
  };

  $scope.tasks = {
    total: 50
  };
}
