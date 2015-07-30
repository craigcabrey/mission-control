/**
 * Overview Controller
 */

angular.module('mission-control')
  .controller('OverviewCtrl', ['$scope', 'Members', 'Events', 'Sponsors', OverviewCtrl]);

function OverviewCtrl($scope, Members, Events, Sponsors) {
  $scope.events = {
    total: 0
  };

  $scope.members = {
    searchQuery: '',
    total: 0,
    data: []
  };

  $scope.sponsors = {
    total: 'API MISSING'
  };

  $scope.tasks = {
    total: 'API MISSING'
  };

  /* Getting Member Data */
  Members.get(function (data) {
    $scope.members.total = data.total;
    $scope.members.data = data.data;
  });

  /* Getting Event Data */
  Events.get(function(data){
    $scope.events.total = data.length;
  })

  /* Getting Sponsor Data */
  Sponsors.get(function(data){
    $scope.sponsors.total = data.length;
  })

}
