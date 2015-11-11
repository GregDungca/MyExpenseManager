angular.module('directives', ['d3'])
.directive('d3Bars', ['$window', '$timeout', 'd3Service', 'Expenses',
  function ($window, $timeout, d3Service, Expenses) {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function(scope, ele, attrs) {
        d3Service.d3().then(function(d3) {
          // Expenses.sumPerCategory()
          var renderTimeout;
          var margin = parseInt(attrs.margin) || 20,
              barHeight = parseInt(attrs.barHeight) || 20,
              barPadding = parseInt(attrs.barPadding) || 5;

          var svg = d3.select(ele[0])
            .append('svg')
            .style('width', '100%');

          $window.onresize = function() {
            scope.$apply();
          };
          // scope.data = Expenses.sumPerCategory();

          // scope.data = [
          //   {category: "Food", amount: 300},
          //   {category: "Transport", amount: 50},
          //   {category: 'Clothes', amount: 50},
          //   {category: "Fun", amount: 200},
          //   {category: "Other", amount: 200}
          // ];
          Expenses.sumPerCategory()
            .then ( function (res) {
              var sums = [];
              _.each(Expenses.categories, function(category){
                var amount = _.reduce(res.data, function(sum, expense) {
                  if ( expense.category === category ) {
                    return sum + expense.amount;
                  } else {
                    return sum;
                  }
                }, 0);
                sums.push({category : category, amount : amount});
                scope.data = sums;
              });

              ////

              scope.$watch(function() {
                return angular.element($window)[0].innerWidth;
              }, function() {
                scope.render(scope.data);
              });

              scope.$watch('data', function(newData) {
                scope.render(newData);
              }, true);

              scope.render = function(data) {
                svg.selectAll('*').remove();

                if (!data) return;
                if (renderTimeout) clearTimeout(renderTimeout);

                renderTimeout = $timeout(function() {
                  var width = d3.select(ele[0])[0][0].offsetWidth - margin,
                      height = scope.data.length * (barHeight + barPadding),
                      color = d3.scale.category20(),
                      xScale = d3.scale.linear()
                        .domain([0, d3.max(data, function(d) {
                          return d.amount;
                        })])
                        .range([0, width]);

                  svg.attr('height', height);

                  svg.selectAll('rect')
                    .data(data)
                    .enter()
                      .append('rect')
                      .on('click', function(d,i) {
                        return scope.onClick({item: d});
                      })
                      .attr('height', barHeight)
                      .attr('width', 140)
                      .attr('x', Math.round(margin/2))
                      .attr('y', function(d,i) {
                        return i * (barHeight + barPadding);
                      })
                      .attr('fill', function(d) {
                        return color(d.amount);
                      })
                      .transition()
                        .duration(1000)
                        .attr('width', function(d) {
                          return xScale(d.amount);
                        });
                  svg.selectAll('text')
                    .data(data)
                    .enter()
                      .append('text')
                      .attr('fill', '#fff')
                      .attr('y', function(d,i) {
                        return i * (barHeight + barPadding) + 15;
                      })
                      .attr('x', 15)
                      .text(function(d) {
                        return d.category + ' ' + d.amount;
                      });
                }, 200);
              };////////









            }, function (res) {
              console.error(res);
            });



          
        });
      }}
}])
