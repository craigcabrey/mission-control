'use strict';

/**
 * @ngdoc service
 * @name mission-control.constants
 * @description
 * # All the constants to do with URLS.
 * Constant in the mission-control APP.
 */
angular.module('mission-control')
  .constant('SSE_API_URLS', {
    base: 'http://vm01.craigcabrey.com:8000/api/v1',
    /* Each URL which has a service has '//' appended */
    agenda: '/agenda', //
    events: '/events', //
    members: '/members', //
    memberships: '/memberships', //
    mentors: '/mentors', //
    officers: '/officers', //
    quotes: '/quotes',
    terms: '/terms',
    tips: '/tips',
    sponsors: '/sponsors', //
    tasks: '/tasks'
  });
