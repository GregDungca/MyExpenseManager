angular.module('services', [])

.factory('Expenses', function ($http) {
  var categories = [
    'Food',
    'Transportation',
    'Fun',
    'Clothes',
    'Phone',
    'Other'
  ];

  var getExpenses = function() {
    return $http({
      method: 'GET',
      url: '/api/expenses'
    });
  }

  var sendExpense = function(expense) {
    return $http({
      method: 'POST',
      url: '/api/expenses',
      data: expense
    });
  };

  var sumPerCategory = function(cb) {

    return getExpenses();

  };

  return {
    getExpenses : getExpenses,
    sendExpense : sendExpense,
    categories : categories,
    sumPerCategory : sumPerCategory
  }

});
  


