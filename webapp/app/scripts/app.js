var myApp = angular.module('testr', ['ngSanitize', 'ngRoute', 'ui.layout'])

    .run(['$rootScope', function($rootScope)
    {
        var $html = document.getElementById('html'),
            $body = document.getElementById('body');

        $html.className = '';

        $rootScope.$on('$routeChangeSuccess', function(ev, evData)
        {
            $body.className = evData.controller;
        });
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
    'api': 'http://qwant/',// 'http://es.subitolabs.com/api/',
    'app': myApp
};