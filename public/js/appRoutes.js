angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/shows', {
            templateUrl: 'views/show.html',
            controller: 'ShowController'
        });

    $locationProvider.html5Mode(true);
}]);
