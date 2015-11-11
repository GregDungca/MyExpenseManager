angular.module('expensesApp', ['ui.bootstrap','expenses', 'services', 'ngRoute', 'd3', 'directives'])
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
        when('/expenses', {
          templateUrl: './app/expenses/expenses.html',
          controller: 'ExpensesCtrl'
        }).
        when('/graphs', {
          templateUrl: './app/graphs/graphs.html',
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
