'use strict';

angular.module('mission-control').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/overview.html',
        controller: 'OverviewCtrl'
      })
      .state('agenda', {
        url: '/agenda',
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .state('members', {
        url: '/members',
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      })
      .state('sponsors', {
        url: '/sponsors',
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl'
      })
      .state('tasks', {
        url: '/tasks',
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      });
  }
]);
