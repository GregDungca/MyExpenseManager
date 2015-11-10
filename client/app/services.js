angular.module('services', [])

.factory('Expenses', function ($http) {
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

  return {
    getExpenses : getExpenses,
    sendExpense : sendExpense
  }


});
  



// .factory('Links', function ($http) {
//   // Your code here
//     var getLinks = function () {
//       return $http({
//         method: 'GET',
//         url: '/api/links'
//       });
//     };
//     var addLink = function (link) {
//       return $http({
//         method: 'POST',
//         url: '/api/links',
//         data: link
//       });
//     };
