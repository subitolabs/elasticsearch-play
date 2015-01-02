myApp.directive('myJsonEditor', [function()
{
    return {
        restrict: 'E',
        require: 'ngModel',
        templateUrl: '/views/json-editor.html',
        scope: {

        },
        link: function(scope, root, attr, ngModel)
        {
            var editor = null, editorSession = null, tmrChanged = 0;

            scope.aceLoaded = function(_editor)
            {
                editor          = _editor;
                editorSession   = _editor.getSession();

                editorSession.setTabSize(2);
                editorSession.setUseWrapMode(true);
                editorSession.setFoldStyle('markbeginend');
                editor.$blockScrolling = 999999;

                ngModel.$render();
            };

            scope.aceChanged = function(e)
            {
                if (angular.isDefined(e)) {

                    clearTimeout(tmrChanged);

                    tmrChanged = setTimeout(function()
                    {
                        try {
                            var buffer = JSON.parse(editorSession.getValue());

                            ngModel.$setViewValue(buffer, 'ace');
                        }
                        catch (e) {
                        }
                    }, 300);
                }
            };

            ngModel.$render = function()
            {
                if (editor !== null)
                {
                    var oldValue = editorSession.getValue(),
                        newValue = JSON.stringify(ngModel.$viewValue, null, 4);

                    try {
                        oldValue = JSON.stringify(JSON.parse(oldValue), null, 4);
                    }
                    catch (e) {
                    }

                    if (newValue !== oldValue) {
                        editorSession.setValue(newValue);
                    }
                }
            };

            scope.$parent.$watch(attr.ngModel, function(value)
            {
                ngModel.$render();
            }, true);
        }
    };
}]);