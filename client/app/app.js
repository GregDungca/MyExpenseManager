angular.module('expensesApp', ['expenses', 'services', 'ngRoute'])
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
        when('/expenses', {
          templateUrl: './app/expenses/expenses.html',
          controller: 'ExpensesCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
    }]);
