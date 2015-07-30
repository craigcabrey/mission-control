'use strict';

/**
 * @ngdoc service
 * @name member-service.Members
 * @description
 * # Members
 * Factory in the mission-control app.
 */
angular.module('mission-control')
  .factory('Members', function ($resource, SSE_API_URLS) {
    return $resource(SSE_API_URLS.base + SSE_API_URLS.members);
  });

