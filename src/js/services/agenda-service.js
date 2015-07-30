'use strict';

/**
 * @ngdoc service
 * @name Agenda
 * @description
 * # Agenda
 * Factory in the mission-control app.
 */
angular.module('mission-control')
  .factory('Agenda', function ($resource, SSE_API_URLS) {
    return $resource(SSE_API_URLS.base + SSE_API_URLS.agenda);
  });

