'use strict';

/**
 * @ngdoc service
 * @name Officers
 * @description
 * # Officers
 * Factory in the mission-control app.
 */
angular.module('mission-control')
  .factory('Officers', function ($resource, SSE_API_URLS) {
    return $resource(SSE_API_URLS.base + SSE_API_URLS.officers);
  });
