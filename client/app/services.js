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

  var sumPerCategory = function() {
    var sums = {};
    _.each(categories, function(category) {
      sums.category = 0;
    });
    getExpenses()
      .then ( function (res) ) {
        _.each(categories, function(category){
          _.reduce(res.data, function(sum, expense) {
            if ( expense.category = category ) {
              return sum + expense.amount;
            } else {
              return sum;
            }
          }, 0);
        });
      }, function (res) {
        console.error(res);
      });
  };

  return {
    getExpenses : getExpenses,
    sendExpense : sendExpense,
    sumPerCategory : sumPerCategory
  }

});
  


