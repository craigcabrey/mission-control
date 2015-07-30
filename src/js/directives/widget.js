/**
 * Widget Directive
 */

angular
  .module('mission-control')
  .directive('rdWidget', rdWidget);

function rdWidget() {
  return {
    transclude: true,
    template: '<div class="widget" ng-transclude></div>',
    restrict: 'EA'
  };

  function link(scope, element, attrs) {
    /* */
  }
}
