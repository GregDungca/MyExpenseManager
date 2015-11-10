var expenses = angular.module('expenses', []);

expenses.controller('ExpensesCtrl', function ($scope, Expenses) {
  $scope.expense = {};

  $scope.sendExpense = function () {
    // call the associated handler within services.js

    Expenses.sendExpense($scope.expense)
      .then( function (res) {
        // success
        console.log('Success: ' + res);
      }, function (res) {
        // fail
        console.error(res);
      });
    
  }

});
