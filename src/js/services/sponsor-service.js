'use strict';

/**
 * @ngdoc service
 * @name Sponsors
 * @description
 * # Sponsors
 * Factory in the mission-control app.
 */
angular.module('mission-control')
  .factory('Sponsors', function ($resource, SSE_API_URLS) {
    return $resource(SSE_API_URLS.base + SSE_API_URLS.sponsors);
  });
