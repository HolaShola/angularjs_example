var myApp = angular.module('myApp', ['ngRoute']);
var adminApp = angular.module('adminApp', []);
var superAdminApp = angular.module('superAdminApp', []);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/first', {
            templateUrl: "js/templates/first.html",
            controller: "first/firstCtrl",
        });
    $routeProvider    
        .when('/second', {
            templateUrl: "js/templates/second.html",
            controller: "second/secondCtrl",
        });
})


// var app = angular.module('app', [
//     'myApp',
//     'adminApp',
//     'superAdminApp',
//     'ngRoute',
// ]);
