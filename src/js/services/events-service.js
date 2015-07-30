'use strict';

/**
 * @ngdoc service
 * @name Events
 * @description
 * # Events
 * Factory in the mission-control app.
 */
angular.module('mission-control')
  .factory('Events', function ($resource, SSE_API_URLS) {
    return $resource(
      SSE_API_URLS.base + SSE_API_URLS.events,
      {}, // params go here
      {get: {method: 'GET', isArray: true}} // TODO: remove when paginated, as res will not be array
    );
  });
