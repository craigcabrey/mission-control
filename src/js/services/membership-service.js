'use strict';

/**
 * @ngdoc service
 * @name Memberships
 * @description
 * # Memberships
 * Factory in the mission-control app.
 */
angular.module('mission-control')
  .factory('Memberships', function ($resource, SSE_API_URLS) {
    return $resource(SSE_API_URLS.base + SSE_API_URLS.memberships);
  });
