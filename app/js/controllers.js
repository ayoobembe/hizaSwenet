var hizaControllers = angular.module('hizaControllers', []);

hizaControllers.controller('bodyController',['$scope',
  function ($scope) {
    $scope.company = "Hiza Swenet";
  }
])
