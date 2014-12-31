myApp.controller('testr', ['$scope', '$http', function($scope, $http)
{
    $scope.filters          = {"my_word_delimiter" : {"type" : "word_delimiter", "catenate_words" : true, "preserve_original" : true, "generate_word_parts" : false}};
    $scope.analyzers        = {"standard" : {"type" : "standard"}, "french" : {"type" : "french"}};

    $scope.jsonFilters      = '';
    $scope.jsonAnalyzers    = '';

    $scope.sample       = 'François hollande passe à la télévision en slip.';
    $scope.running      = false;
    $scope.availableFilters = [{"title":"Standard","url":"analysis-standard-tokenfilter.html"},{"title":"ASCII Folding","url":"analysis-asciifolding-tokenfilter.html"},{"title":"Length","url":"analysis-length-tokenfilter.html"},{"title":"Lowercase","url":"analysis-lowercase-tokenfilter.html"},{"title":"Uppercase","url":"analysis-uppercase-tokenfilter.html"},{"title":"NGram","url":"analysis-ngram-tokenfilter.html"},{"title":"Edge NGram","url":"analysis-edgengram-tokenfilter.html"},{"title":"Porter Stem","url":"analysis-porterstem-tokenfilter.html"},{"title":"Shingle","url":"analysis-shingle-tokenfilter.html"},{"title":"Stop","url":"analysis-stop-tokenfilter.html"},{"title":"Word Delimiter","url":"analysis-word-delimiter-tokenfilter.html"},{"title":"Stemmer","url":"analysis-stemmer-tokenfilter.html"},{"title":"Stemmer Override","url":"analysis-stemmer-override-tokenfilter.html"},{"title":"Keyword Marker","url":"analysis-keyword-marker-tokenfilter.html"},{"title":"Keyword Repeat","url":"analysis-keyword-repeat-tokenfilter.html"},{"title":"KStem","url":"analysis-kstem-tokenfilter.html"},{"title":"Snowball","url":"analysis-snowball-tokenfilter.html"},{"title":"Phonetic","url":"analysis-phonetic-tokenfilter.html"},{"title":"Synonym","url":"analysis-synonym-tokenfilter.html"},{"title":"Compound Word","url":"analysis-compound-word-tokenfilter.html"},{"title":"Reverse","url":"analysis-reverse-tokenfilter.html"},{"title":"Elision","url":"analysis-elision-tokenfilter.html"},{"title":"Truncate","url":"analysis-truncate-tokenfilter.html"},{"title":"Unique","url":"analysis-unique-tokenfilter.html"},{"title":"Pattern Capture","url":"analysis-pattern-capture-tokenfilter.html"},{"title":"Pattern Replace","url":"analysis-pattern_replace-tokenfilter.html"},{"title":"Trim","url":"analysis-trim-tokenfilter.html"},{"title":"Limit Token Count","url":"analysis-limit-token-count-tokenfilter.html"},{"title":"Hunspell","url":"analysis-hunspell-tokenfilter.html"},{"title":"Common Grams","url":"analysis-common-grams-tokenfilter.html"},{"title":"Normalization","url":"analysis-normalization-tokenfilter.html"},{"title":"CJK Width","url":"analysis-cjk-width-tokenfilter.html"},{"title":"CJK Bigram","url":"analysis-cjk-bigram-tokenfilter.html"},{"title":"Delimited Payload","url":"analysis-delimited-payload-tokenfilter.html"},{"title":"Keep Words","url":"analysis-keep-words-tokenfilter.html"},{"title":"Keep Types","url":"analysis-keep-types-tokenfilter.html"},{"title":"Classic","url":"analysis-classic-tokenfilter.html"},{"title":"Apostrophe","url":"analysis-apostrophe-tokenfilter.html"}];

    $scope.dialog_filter_add_open = false;

    $scope.run = function()
    {
        $scope.running = true;

        $http
            .post(
                'http://local:8080/index.php',
                {filters : $scope.filters, analyzers : $scope.analyzers, text : $scope.sample}
            )
            .success(function(data, status, headers, config)
            {
                $scope.running = false;

                $scope.tests = data.data.tests;
            }).
            error(function(data, status, headers, config)
            {
                $scope.running = false;
            });
    };

    $scope.addFilter = function(filter)
    {
        $scope.filters['my_' + filter.title] = {"type" : filter.title};

        $scope.dialog_filter_add_open = false;
    };

    $scope.aceLoaded = function(editor)
    {
        editor.getSession().setTabSize(2);
        editor.getSession().setUseWrapMode(true);
        editor.getSession().setFoldStyle('markbeginend');
        editor.$blockScrolling = 999999;

        (function(_editor)
        {
           setTimeout(function()
           {
               try {
                  // _editor.setValue(JSON.stringify(JSON.parse(_editor.getValue()), null, '\t'));
               } catch(e)
               {
                   console.log(e);
               }
           }, 100);
        })(editor);

        //
    };

    $scope.aceChanged = function(e) {

    };

    $scope.$watch('filters', function(newValue)
    {
        $scope.jsonFilters = JSON.stringify(newValue, null, 4);
    }, true);

    $scope.$watch('analyzers', function(newValue)
    {
        $scope.jsonAnalyzers = JSON.stringify(newValue, null, 4);
    });


    $scope.run();
}]);