/**
 * var buffer = new Array(); $('.toc a').each(function(i, item) { buffer.push({'title' : $(item).html(), 'url' : $(item).attr('href')}) });
 */
myApp.controller('testr', ['$scope', '$http', '$document', function($scope, $http, $document)
{
    $scope.filters          = {"my_word_delimiter" : {"type" : "word_delimiter", "catenate_words" : true, "preserve_original" : true, "generate_word_parts" : false}};
    $scope.tokenizers       = {};
    $scope.analyzers        = {"standard" : {"type" : "standard"}, "french" : {"type" : "french"}};

    $scope.settings = {
      'font_size' : 14
    };

    $scope.analyzer_new     = {};

    $scope.sample               = 'François Hollande passe à la télévision pour la 15ème fois.';
    $scope.running              = false;
    $scope.error                = null;
    $scope.availableFilters     = window.availableFilters;
    $scope.availableTokenizers  = window.availableTokenizers;

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

        $http
            .post(
                API_URL,
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

    $document.bind('keyup', function(e)
    {
        if (e.which === 27)
        {
            $scope.closeDialog();
        }
    });

    $scope.run();
}]);