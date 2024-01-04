(function(){
    'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchController);

   LunchController.$inject($scope);

   function LunchController($scope){

    $scope.lunchItems="";

    $scope.msg ="";

    $scope.checkonClick = function(){
        if ($scope.lunchItems.length == 0) {
            $scope.msg = "Please enter data first";
          }else if ($scope.lunchItems.split(",").length < 4 ) {
            $scope.msg = "Enjoy!";
          }else {
            $scope.msg = "Too much!";
          }
    };

   }
})();