'use strict';

angular.module('mission-control')
  .factory('Tasks', function($resource, SSE_API_URLS) {
    return $resource(SSE_API_URLS.base + SSE_API_URLS.tasks);
  });
