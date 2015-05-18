'use strict';

/**
 * @ngdoc overview
 * @name gxtDashboardApp
 * @description
 * # gxtDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('gxtDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
