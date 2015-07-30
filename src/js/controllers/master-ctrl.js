/**
 * Master Controller
 */

angular.module('mission-control')
  .controller('MasterCtrl', ['$scope', '$cookieStore', '$http', 'SSE_API_URLS', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, $http, SSE_API_URLS) {
  /**
   * GATHER ALL API URLS
   */
  var base = SSE_API_URLS.base;
  $http.get(base).
    success(function (data) {
      SSE_API_URLS.agenda = data.agenda_url.replace(base, '');
      SSE_API_URLS.events = data.events_url.replace(base, '');
      SSE_API_URLS.groups = data.groups_url.replace(base, '');
      SSE_API_URLS.lingo = data.lingo_url.replace(base, '');
      SSE_API_URLS.members = data.members_url.replace(base, '');
      SSE_API_URLS.memberships = data.memberships_url.replace(base, '');
      SSE_API_URLS.mentors = data.mentors_url.replace(base, '');
      SSE_API_URLS.officers = data.officers_url.replace(base, '');
      SSE_API_URLS.quotes = data.quotes_url.replace(base, '');
      SSE_API_URLS.terms = data.terms_url.replace(base, '');
      SSE_API_URLS.tips = data.tips_url.replace(base, '');
      //SSE_API_URLS.tasks = // TODO ADD TASKS TO API
      console.log(SSE_API_URLS);
    }).
    error(function (err) {
      console.error('FATAL ERROR; COULD NOT ACCESS BASE URL');
      // TODO: DISPLAY SOMETHING SHOWING SERVER IS OFFLINE
    });


  /**
   * Sidebar Toggle & Cookie Control
   */
  var mobileView = 992;

  $scope.getWidth = function () {
    return window.innerWidth;
  };

  $scope.$watch($scope.getWidth, function (newValue, oldValue) {
    if (newValue >= mobileView) {
      if (angular.isDefined($cookieStore.get('toggle'))) {
        $scope.toggle = $cookieStore.get('toggle');
      } else {
        $scope.toggle = true;
      }
    } else {
      $scope.toggle = false;
    }

  });

  $scope.toggleSidebar = function () {
    $scope.toggle = !$scope.toggle;
    $cookieStore.put('toggle', $scope.toggle);
  };

  window.onresize = function () {
    $scope.$apply();
  };
}
