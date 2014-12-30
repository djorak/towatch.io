// == MODULES ==

var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override');


// == CONFIG ==

var db = require('./config/db');
var port = process.env.PORT || 8080;

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
// /public/img will be /img for users
app.use(express.static(__dirname + '/public'));


// == ROUTES ==

require('./app/routes')(app);


// == START APP ==

app.listen(port);

console.log('App started on port ' + port);

// expose app
exports = module.exports = app;
