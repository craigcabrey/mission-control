'use strict';

/**
 * @ngdoc service
 * @name Mentors
 * @description
 * # Mentors
 * Factory in the mission-control app.
 */
angular.module('mission-control')
  .factory('Mentors', function ($resource, SSE_API_URLS) {
    return $resource(SSE_API_URLS.base + SSE_API_URLS.mentors);
  });
