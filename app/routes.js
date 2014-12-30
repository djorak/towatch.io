var path = require('path'),
    Show = require('./models/show');

module.exports = function(app) {

    // == SERVER ROUTES ==
    // handle api calls, authentication routes

    app.get('/api/shows', function(req, res) {
        // use mongoose to get all nerds in the database
        Show.find(function(err, shows) {

            if (err)
                res.send(err);

            res.json(shows);
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    //== FRONTEND ROUTES ==
    // handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
    });

};
