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
    var sums = [];
    // _.each(categories, function(category) {
    //   sums.category = 0;
    // });
    getExpenses()
      .then ( function (res) {
        _.each(categories, function(category){
          var amount = _.reduce(res.data, function(sum, expense) {
            if ( expense.category = category ) {
              return sum + expense.amount;
            } else {
              return sum;
            }
          }, 0);
          sums.push({category : category, amount : amount});
          return sums;
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
  


