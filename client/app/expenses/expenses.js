var expenses = angular.module('expenses', []);

expenses.controller('ExpensesCtrl', function ($scope, Expenses) {
  $scope.submittedExpense = {};
  $scope.expenses = {};

  $scope.sendExpense = function () {
    // call the associated handler within services.js

    Expenses.sendExpense($scope.submittedExpense)
      .then( function (res) {
        // success
        console.log('Success: ' + res);
      }, function (res) {
        // fail
        console.error(res);
      });
  }

  $scope.getExpenses = function() {
    Expenses.getExpenses()
      .then( function (res) {
        // success
        $scope.expenses = res.data;
        
        console.log('Success: ' + res);
      }, function (res) {
        // fail
        console.error(res);
      });

  }

});
