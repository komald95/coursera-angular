(function () {
    'use strict';
   
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
        $scope.name="Komal";
        $scope.sayHello=function(){
            return "Hello Komal";
        }
    });
    
    })();
    