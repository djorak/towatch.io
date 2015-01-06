// == MODULES ==

var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    // == DATABASE CONF ==
    db = require('./config/db'),
    port = process.env.PORT || 8080;

api = require('./config/api');

// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// static files location
app.use(express.static(__dirname + '/public'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

// == OAUTH2 ==
/*
var oauth2 = require('simple-oauth2')({
  clientID: api.key,
  clientSecret: api.token,
  site: 'https://www.betaseries.com/authorize',
  tokenPath: '/oauth/access_token'
});

// Authorization uri definition
var authorization_uri = oauth2.authCode.authorizeURL({
  redirect_uri: 'http://localhost:8080/callback',
  scope: 'notifications',
  state: '3(#0/!~'
});
*/

// == ROUTES ==

require('./app/routes')(app);

// == START APP ==

app.listen(port);

console.log('App started on port ' + port);

// expose app
exports = module.exports = app;
