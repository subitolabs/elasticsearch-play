myApp.directive('myDialog', [function()
{
    return {
        restrict: 'E',
        replace: false,
        transclude: true,
        templateUrl: '/views/dialog.html',
        scope: {
            'title' : '@'
        },
        link: function(scope, root)
        {
            root.addClass('dialog');

            scope.close = function()
            {
                root.removeClass('dialog--open');
            };
        }
    };
}]);