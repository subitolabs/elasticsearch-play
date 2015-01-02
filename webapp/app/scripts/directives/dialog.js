myApp.directive('myDialog', [function()
{
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: '/views/dialog.html',
        scope: {
            'title' : '@',
            'open' : '='
        },
        link: function(scope)
        {

        }
    };
}]);