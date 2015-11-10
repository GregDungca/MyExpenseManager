angular.module('services', [])

.factory('SendExpense', function ($http) {
  var getExpenses = function() {

  }


  var sendExpense = function() {
    return $http({
      method: 'POST',
      url: '/'
    })

  }

});
  



.factory('Links', function ($http) {
  // Your code here
    var getLinks = function () {
      return $http({
        method: 'GET',
        url: '/api/links'
      });
    };
    var addLink = function (link) {
      return $http({
        method: 'POST',
        url: '/api/links',
        data: link
      });
    };
