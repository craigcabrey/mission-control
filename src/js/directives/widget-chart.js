/**
 * Widget Body Directive
 */

angular
  .module('mission-control')
  .directive('rdWidgetChart', rdWidgetChart);

function rdWidgetChart() {
  var directive = {
    requires: '^rdWidget',
    scope: {
      loading: '@?',
      classes: '@?'
    },
    transclude: true,
    template: '<div class="widget-body" style="padding-bottom: 0px;" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
    restrict: 'E'
  };
  return directive;
};
