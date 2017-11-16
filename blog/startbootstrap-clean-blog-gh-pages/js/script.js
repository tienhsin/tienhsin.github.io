var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode({enabled : true , requireBase : false});
    
    $routeProvider
    
        .when('/', {
            templateUrl : 'partial/cv.html',
            controller : 'cv_View'
        })

        .when('/login', {
            templateUrl : 'partial/login.php',
            controller : 'loginCtrl'
        });
        
});

app.controller('loginCtrl',['$scope', function($scope, $http){
    
    $scope.abc="test123";

}]);