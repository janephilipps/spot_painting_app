angular.module('spotPaintingApp', ['ngRoute'])

  .controller("MainCtrl", ['$scope', function ($scope) {

    $scope.master = {};

    $scope.painting = {
      rows: 3,
      columns: 3,
      colors: {},
      painting: []
    };

    $scope.constants = {
      numberOfColors: function () {
        return $scope.painting.rows;
      }
    };

    $scope.update = function (painting) {
      $scope.master = angular.copy(painting);
    };

    $scope.reset = function () {
      $scope.painting = angular.copy($scope.master);
    };

    $scope.fillRandom = function () {
      var colors = $scope.painting.colors;
      var arrColors = [];
      for (var key in colors) {
          var color = colors[key];
          arrColors.push(color);
      }

      // Given some rows, columns, and an empty array
      var r = $scope.painting.rows,
          c = $scope.painting.columns,
          array = [];

      for (var i = 0; i < r; i++) {
        array.push([]);
        for (var j = 0; j < c; j++) {
          var rand = Math.floor(Math.random() * arrColors.length);
          array[i].push(arrColors[rand]);
        }
      }

      // Then save the array
      $scope.painting.painting = array;
    }

  }])

  .filter('range', function () {
    return function (input, total) {
      total = parseInt(total);
      for (var i = 0; i < total; i++) {
        input.push(i);
      }
      return input;
    };
  })