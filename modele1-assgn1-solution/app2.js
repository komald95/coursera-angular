(function(){
    'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchController);

   LunchController.$inject($scope);

   function LunchController($scope){

    $scope.lunchItems="";

    $scope.msg ="";

    $scope.checkonClick = function(){
        var countItems = $scope.lunchItems.split(",").length;
        if (countItems < 2 ) {
            $scope.msg = "Please enter data first";
          }else if (countItems < 4 ) {
            $scope.msg = "Enjoy!";
          }else {
            $scope.msg = "Too much!";
          }
    };

   }
})();