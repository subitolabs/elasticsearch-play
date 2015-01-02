var myApp = angular.module('testr', ['ngResource', 'ngSanitize', 'ui.layout'])

.run(['$rootScope', '$location', function($rootScope, $location)
{
    document.getElementById('html').className = '';
}]);