myApp.directive('myJsonEditor', [function()
{
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {

        },
        link: function(scope, root, attr, ngModel)
        {
            var editor = null, editorSession = null, tmrChanged = 0;

            editor          = window.ace.edit(root[0]);
            editorSession   = editor.getSession();

            editorSession.setMode('ace/mode/json');
            editorSession.setTabSize(4);
            editorSession.setUseWrapMode(true);
            editorSession.setFoldStyle('markbeginend');
            editor.$blockScrolling = 999999;

            editor.setOptions({
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
            });

            ace.require("ace/ext/language_tools");

            editor.completers = [{
                getCompletions: function(editor, session, pos, prefix, callback)
                {
                    callback(null, scope.$parent.getCompletionTerms(attr.ngModel));
                }
            }];

            editor.on('blur', function()
            {
                try {
                    var buffer = JSON.parse(editorSession.getValue());

                    editorSession.setValue(JSON.stringify(buffer, null, 4));
                }
                catch (e) {
                }
            });

            editorSession.on('change', function(e)
            {
                if (angular.isDefined(e))
                {
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
            });

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

                    if (newValue !== oldValue)
                    {
                        editorSession.setValue(newValue);
                    }
                }
            };

            scope.$parent.$watch(attr.ngModel, function(value)
            {
                ngModel.$render();
            }, true);

            scope.$watch(function() {
                return [root[0].offsetWidth, root[0].offsetHeight];
            }, function() {
                editor.resize();
                editor.renderer.updateFull();
            }, true);
        }
    };
}]);