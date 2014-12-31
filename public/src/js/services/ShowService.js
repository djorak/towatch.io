angular.module('ShowService', []).factory('Show', ['$http',
    function($http) {
        return {
            get: function() {
                return $http.get('/api/shows');
            },

            // these will work when more API routes are defined on the Node side of things
            // call to POST and create a new nerd
            create: function(showData) {
                return $http.post('/api/shows', showData);
            },

            // call to DELETE a nerd
            delete: function(id) {
                return $http.delete('/api/shows/' + id);
            }
        };
    }
]);
