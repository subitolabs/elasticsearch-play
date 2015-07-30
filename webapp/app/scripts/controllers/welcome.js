myApp.controller('welcome', ['$scope', '$location', function($scope, $location)
{
    var randomIndex = Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(1, 33);

    $scope.openFromScratch = function()
    {
        $location.path('/testr/' + randomIndex);
    };

    $scope.openFromSample = function(example)
    {
        $location.path('/testr/sample-' + example + '-' + randomIndex);
    };

    $scope.openExisting = function()
    {
        $location.path('/testr/' + $scope.formData.index);
    };
}]);