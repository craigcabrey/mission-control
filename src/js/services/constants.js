'use strict';

/**
 * @ngdoc service
 * @name mission-control.constants
 * @description
 * # All the constants to do with URLS.
 * Constant in the mission-control APP.
 */
angular.module('mission-control')
  .constant('SSE_API_URL', 'http://vm01.craigcabrey.com:8000/api/v1');

angular.module('mission-control')
  .constant('MEMBERS_URL', '/members');

angular.module('mission-control')
  .constant('SSE_API_URLS', {
    base: 'http://vm01.craigcabrey.com:8000/api/v1',
    agenda: 'DEFINED_IN_MASTERCTRL',
    events: 'DEFINED_IN_MASTERCTRL',
    members: 'DEFINED_IN_MASTERCTRL',
    memberships: 'DEFINED_IN_MASTERCTRL',
    mentors: 'DEFINED_IN_MASTERCTRL',
    officers: 'DEFINED_IN_MASTERCTRL',
    quotes: 'DEFINED_IN_MASTERCTRL',
    terms: 'DEFINED_IN_MASTERCTRL',
    tips: 'DEFINED_IN_MASTERCTRL',
    sponsors: 'DEFINED_IN_MASTERCTRL',
    tasks: 'DEFINED_IN_MASTERCTRL'
  });
