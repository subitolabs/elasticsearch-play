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
            .when('/index/:index', {
                templateUrl: "views/testr.html",
                controller: 'testr'
            }).otherwise({
                redirectTo: '/'
            });
    }]);

var testr = {
    'api': 'http://local:8080/',
    'app': myApp,
    'data' : {
        'index' : ''
    }
};