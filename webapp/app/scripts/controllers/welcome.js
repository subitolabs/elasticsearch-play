myApp.controller('welcome', ['$scope', '$location', function($scope, $location)
{
    $scope.formData = {index : Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(1, 33)};

    $scope.open = function()
    {
        $location.path('/testr/' + $scope.formData.index);
    };
}]);