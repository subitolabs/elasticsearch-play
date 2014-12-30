myApp.controller('testr', ['$scope', '$http', function($scope, $http)
{
    $scope.filters      = '{"my_word_delimiter" : {"type" : "word_delimiter", "catenate_words" : true, "preserve_original" : true, "generate_word_parts" : false}}';
    $scope.analyzers    = '{"standard" : {"type" : "standard"}, "french" : {"type" : "french"}}';

    $scope.run = function()
    {
        $http
            .post(
                'http://local/testr.php',
                {filters : $scope.filters, analyzers : $scope.analyzers}
            )
            .success(function(data, status, headers, config) {

            }).
            error(function(data, status, headers, config) {
            });
    };

    $scope.aceLoaded = function(editor)
    {
        editor.getSession().setTabSize(2);
        editor.getSession().setUseWrapMode(true);

        editor.setValue(JSON.stringify(JSON.parse(editor.getValue()), null, '\t'));
    };

    $scope.aceChanged = function(e) {
        //
    };

    $scope.run();
}]);