'use strict';

angular.module('mission-control').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    // For unmatched routes
    $urlRouterProvider.otherwise('/');

<<<<<<< HEAD
    // Application routes
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/overview.html',
        controller: 'OverviewCtrl'
      })
      .state('agenda', {
        url: '/agenda',
        templateUrl: 'templates/agenda.html',
        controller: 'AgendaCtrl'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'templates/events.html',
        controller: 'EventsCtrl'
      })
      .state('members', {
        url: '/members',
        templateUrl: 'templates/members.html',
        controller: 'MembersCtrl'
      })
      .state('sponsors', {
        url: '/sponsors',
        templateUrl: 'templates/sponsors.html',
        controller: 'SponsorsCtrl'
      })
      .state('tasks', {
        url: '/tasks',
        templateUrl: 'templates/tasks.html',
        controller: 'TasksCtrl'
      });
  }
]);
