(function (){
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController ($scope) {
  $scope.onceCounter = 0;
  $scope.zCounter = 0;

  $scope.showNumberOfWatchers = function () {
    console.log('# of watches ',  $scope.$$watchersCount);

  };

  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function () {
    $scope.zCounter++;
  };

  $scope.$watch('onceCounter', function (newValue, oldValue) {
    console.log('old value: ', oldValue);
    console.log('new value: ', newValue);
  } );

  $scope.$watch('zCounter', function (newValue, oldValue) {
    console.log('old value: ', oldValue);
    console.log('new value: ', newValue);
  } );

}


})();
