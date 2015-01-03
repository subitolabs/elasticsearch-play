var API_URL = 'http://www.kinoulink.com:8080/api/', myApp = angular.module('testr', ['ngSanitize', 'ngRoute', 'ui.layout'])

.run(['$rootScope', '$location', function($rootScope, $location)
{
    document.getElementById('html').className = '';
}])

.config(['$routeProvider', function ($routeProvider)
{
    $routeProvider.when('/', {
        templateUrl: "views/welcome.html",
        controller: 'welcome'
    })
    .when('/index/(:index)', {
        templateUrl: "views/testr.html",
        controller: 'testr'
    }).otherwise({
        redirectTo: '/'
    });
}]);