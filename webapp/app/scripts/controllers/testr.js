/**
 * var buffer = new Array(); $('.toc a').each(function(i, item) { buffer.push({'title' : $(item).html(), 'url' : $(item).attr('href')}) });
 */
testr.app.controller('testr', ['$scope', '$http', '$document', '$routeParams',
    function($scope, $http, $document, $routeParams)
{
    $scope.filters              = {};
    $scope.tokenizers           = {};
    $scope.analyzers            = {};
    $scope.index                = $routeParams.index;
    $scope.settings             = {analyze_filters : true, enabled_positions : false};
    $scope.analyzer_new         = {};
    $scope.sample               = '';
    $scope.running              = false;
    $scope.error                = null;
    $scope.availableFilters     = window.availableFilters;
    $scope.availableTokenizers  = window.availableTokenizers;
    $scope.availableAnalyzers   = window.availableAnalyzers;

    $scope.openDialog = function(type)
    {
        angular.element(document.getElementById(type + 'Dialog')).addClass('dialog--open');
    };

    $scope.closeDialog = function()
    {
        angular.element(document.getElementsByTagName('my-dialog')).removeClass('dialog--open');
    };

    $scope.run = function()
    {
        $scope.running  = true;
        $scope.error    = null;
        $scope.tests    = null;

        ga('send', 'event', 'run', 'test', 'run test', 1);

        $http
            .post(
                testr.api + 'test',
                {
                    filters : $scope.filters,
                    tokenizers : $scope.tokenizers,
                    analyzers : $scope.analyzers,
                    text : $scope.sample,
                    index : $scope.index,
                    settings : $scope.settings
                }
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

                $scope.error = data;
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

        $scope.closeDialog();
    };

    $scope.addTokenizer = function(tokenizer)
    {
        var buffer = {"type" : tokenizer.uid};

        angular.forEach(tokenizer.options, function(option)
        {
            buffer[option.title] = option.default;
        });

        $scope.tokenizers['my_' + tokenizer.uid] = buffer;

        $scope.closeDialog();
    };

    $scope.addAnalyzer = function(analyzer)
    {
        $scope.dialog_analyzer_new_open = false;

        var buffer = {"type" : analyzer.uid};

        angular.forEach(analyzer.options, function(option)
        {
            buffer[option.title] = option.default;
        });

        $scope.analyzers['my_' + analyzer.uid] = buffer;

        $scope.closeDialog();
    };

    $scope.saveSettings = function()
    {
        $scope.closeDialog();
    };

    $scope.getCompletionTerms = function(type)
    {
        var results = [];

        if (type === 'filters')
        {
            angular.forEach(availableFilters, function(filter)
            {
               angular.forEach(filter.options, function(option)
               {
                  results.push({"value" : option.title, "meta" : "filter option", "caption" : option.title, "exactMatch":1,"score":300});
               });
            });
        }
        else if (type === 'tokenizers' || type === 'analyzers')
        {
            angular.forEach($scope.filters, function(value, name)
            {
                results.push({"value" : name, "meta" : "filter", "caption" : name, "exactMatch":1,"score":300});
            });
        }

        return results;
    };

    $scope.$watch('settings.analyze_filters', function()
    {
        $scope.run();
    });

    $document.bind('keyup', function(e)
    {
        if (e.which === 27)
        {
            $scope.closeDialog();
        }
    });

    $http.post(testr.api + 'open', {index : $scope.index})
        .success(function(data, status, headers, config)
        {
            if (data.status === 200)
            {
                data = data.data;

                $scope.sample = data.text;

                if (data.hasOwnProperty('analyzer')) {
                    $scope.analyzers = data.analyzer;
                }

                if (data.hasOwnProperty('tokenizer')) {
                    $scope.tokenizers = data.tokenizer;
                }

                if (data.hasOwnProperty('filter')) {
                    $scope.filters = data.filter;
                }

                $scope.run();
            }
            else
            {
                $scope.loadingIndexError = data.data.message;
            }

            $scope.closeDialog();
        }).
        error(function(data, status, headers, config)
        {
        });
}]);