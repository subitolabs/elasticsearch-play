myApp.controller('welcome', ['$scope', '$http', '$location', function($scope, $http, $location)
{
    $scope.session_name = "";
    $scope.random_index =  Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(1, 33);

    $scope.running      = false;
    $scope.error        = null;

    $scope.open = function()
    {
        $scope.running  = true;
        $scope.error    = null;

        $http
            .post(
            API_URL + 'open',
            {uid : $scope.session_name}
        )
            .success(function(data, status, headers, config)
            {
                $scope.running = false;


            }).
            error(function(data, status, headers, config)
            {
                $scope.running = false;

                $scope.error = data;
            });
    };
}]);