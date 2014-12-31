angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/shows', {
            templateUrl: 'views/show.html',
            controller: 'ShowController'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
