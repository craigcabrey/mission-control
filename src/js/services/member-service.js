'use strict';

/**
 * @ngdoc service
 * @name member-service.Members
 * @description
 * # Members
 * Factory in the mission-control app.
 */
angular.module('mission-control')
  .factory('Members', function ($resource, SSE_API_URL, MEMBERS_URL) {
    return $resource(SSE_API_URL + MEMBERS_URL); // Note the full endpoint address
  });
