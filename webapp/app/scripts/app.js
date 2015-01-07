var myApp = angular.module('testr', ['ngSanitize', 'ngRoute', 'ui.layout'])

    .run([function()
    {
        document.getElementById('html').className = '';
    }])

    .config(['$routeProvider', function ($routeProvider)
    {
        $routeProvider.when('/', {
            templateUrl: "views/welcome.html",
            controller: 'welcome'
        })
        .when('/testr/:index', {
            templateUrl: "views/testr.html",
            controller: 'testr'
        }).otherwise({
            redirectTo: '/'
        });
    }]);

var testr = {
    'api': 'http://es.subitolabs.com/api/',
    'app': myApp
};