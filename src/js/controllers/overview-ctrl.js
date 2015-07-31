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

  $scope.mentors = {
    onDuty: 'Matt Mokary'
  };

  $scope.sponsors = {
    total: 0
  };

  $scope.tasks = [
    {id: 1, name: 'Task1', description: 'description', actions: 'View Close'},
    {id: 2, name: 'Task2', description: 'description', actions: 'View Close'},
    {id: 3, name: 'Task3', description: 'description', actions: 'View Close'},
    {id: 4, name: 'Task4', description: 'description', actions: 'View Close'},
    {id: 5, name: 'Task5', description: 'description', actions: 'View Close'},
    {id: 6, name: 'Task6', description: 'description', actions: 'View Close'},
    {id: 7, name: 'Task7', description: 'description', actions: 'View Close'},
    {id: 8, name: 'Task8', description: 'description', actions: 'View Close'},
  ];

  /* Getting Member Data */
  Members.get(function (data) {
    $scope.members.total = data.total;
    $scope.members.data = data.data;
  });

  /* Getting Event Data */
  Events.get(function (data) {
    $scope.events.total = data.length;
  });

  /* Getting Sponsor Data */
  Sponsors.get(function (data) {
    $scope.sponsors.total = data.length;
  });

  angular.element(document).ready(function () {
    var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Members",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [10, 15, 12, 20, 22, 43, 57, 57]
        },
        {
          label: "Memberships",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [8, 14, 11, 15, 17, 40, 45, 45]
        }
      ]
    };

    var memberLineChartConfig = {
      responsive: true,
      // Grid Lines
      scaleShowGridLines: false,
      scaleGridLineColor: "rgba(0,0,0,.05)",

      //Whether the line is curved between points
      bezierCurve: true,
      bezierCurveTension: 0.3,

      // To show a dot for each point
      pointDot: true,
      pointDotRadius: 3,
      pointDotStrokeWidth: 1,

      // Line/Stroke configuration
      datasetStroke: true,
      datasetStrokeWidth: 2,

      //Boolean - Whether to fill the dataset with a colour
      datasetFill: false

    };

    var memberCanvasElement = document.getElementById("memberChart").getContext("2d");
    var headcountCanvasElement= document.getElementById("headcountChart").getContext("2d");
    var memberLineChart = new Chart(memberCanvasElement).Line(data, memberLineChartConfig);
    var headcountChart = new Chart(headcountCanvasElement).Line(data, memberLineChartConfig);
  });
}
