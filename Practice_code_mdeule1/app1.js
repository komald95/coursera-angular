(function(){

  'use strict';
  
  angular.module('NameCalculator',[])
  
  .controller('NameCalculatorController',['$scope','$filter',nameControler]);

  nameControler.$inject($scope,$filter);

  function nameControler($scope,$filter){
  $scope.name = "Komal";
  $scope.totalvalue=0;
  
  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
  
  $scope.displayNumeric=function(){
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalvalue=totalNameValue;
  };
  
  function calculateNumericForString(nam)
  {
  var totalStringValue=0;
  for(var i=0;i<nam.length;i++){
    totalStringValue += nam.charCodeAt(i);
  }
  return totalStringValue;
  }
  
  }
  
})();