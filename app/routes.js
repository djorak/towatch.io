var path = require('path'),
    Show = require('./models/show');

module.exports = function(app) {

    // == SERVER ROUTES ==
    // handle api calls, authentication routes

    app.get('/api/shows', function(req, res) {
        // use mongoose to get all nerds in the database
        /*
        Show.find(function(err, shows) {

            if (err)
                res.send(err);

            res.json(shows);
        });
    */
        res.json('{test:"shows"}');
    });

    // Initial page redirecting to Github
    app.get('/auth', function(req, res) {
        console.log('/auth');
        res.json('{test:"toto"}');

        //res.redirect(api.authorization_uri);
    });

    // Callback service parsing the authorization token and asking for the access token
    /*
    app.get('/callback', function(req, res) {
        var code = req.query.code;
        console.log('/callback');
        oauth2.authCode.getToken({
            code: code,
            redirect_uri: 'http://localhost:8080/callback'
        }, saveToken);

        function saveToken(error, result) {
            if (error) {
                console.log('Access Token Error', error.message);
            }
            token = oauth2.accessToken.create(result);
        }
    });
    */

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    //== FRONTEND ROUTES ==
    // handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
    });

};
