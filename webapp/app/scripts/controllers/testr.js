/**
 * var buffer = new Array(); $('.toc a').each(function(i, item) { buffer.push({'title' : $(item).html(), 'url' : $(item).attr('href')}) });
 */
myApp.controller('testr', ['$scope', '$http', function($scope, $http)
{
    var tmrAceChanged       = 0;

    $scope.filters          = {"my_word_delimiter" : {"type" : "word_delimiter", "catenate_words" : true, "preserve_original" : true, "generate_word_parts" : false}};
    $scope.analyzers        = {"standard" : {"type" : "standard"}, "french" : {"type" : "french"}};

    $scope.jsonFilters      = '';
    $scope.jsonAnalyzers    = '';

    $scope.analyzer_new     = {};

    $scope.sample       = 'François hollande passe à la télévision en slip.';
    $scope.running      = false;
    $scope.error        = null;
    $scope.availableFilters = window.availableFilters;

    $scope.dialog_filter_add_open       = false;
    $scope.dialog_analyzer_new_open     = false;



    $scope.run = function()
    {
        $scope.running  = true;
        $scope.error    = null;
        $scope.tests    = null;

        $http
            .post(
                'http://local:8080/index.php',
                {filters : $scope.filters, analyzers : $scope.analyzers, text : $scope.sample}
            )
            .success(function(data, status, headers, config)
            {
                $scope.running = false;

                if (data.status === 200)
                {
                    $scope.tests = data.data.tests;
                }
                else
                {
                    $scope.error = data.data.message;
                }
            }).
            error(function(data, status, headers, config)
            {
                $scope.running = false;

                $scope.error = data.data.message;
            });
    };

    $scope.addFilter = function(filter)
    {
        var buffer = {"type" : filter.uid};

        angular.forEach(filter.options, function(option)
        {
           buffer[option.title] = option.default;
        });

        $scope.filters['my_' + filter.uid] = buffer;

        $scope.dialog_filter_add_open = false;
    };

    $scope.addAnalyzer = function()
    {
        $scope.dialog_analyzer_new_open = false;

        if ($scope.analyzer_new.hasOwnProperty('name') && $scope.analyzer_new.name !== "") {
            $scope.analyzers[$scope.analyzer_new.name] = {
                "type": "custom",
                "tokenizer": $scope.analyzer_new.tokenizer,
                "filter": []
            };
        }
    };



    $scope.aceFiltersChanged = function(e)
    {
        clearTimeout(tmrAceChanged);

        tmrAceChanged = setTimeout(function() {
         //   $scope.aceChanged('filters');
        }, 200);
    };

    $scope.run();
}]);