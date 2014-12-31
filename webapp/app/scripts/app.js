var myApp = angular.module('testr', ['ngResource', 'ngRoute', 'ngSanitize', 'ui.ace'])

.run(['$rootScope', '$location', function($rootScope, $location)
{
    document.getElementById('html').className = '';

	$rootScope.currentPage = "test";
}]);