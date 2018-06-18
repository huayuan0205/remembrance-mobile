"use strict";

var express = require('express');
var path = require('path');
var http = require('http');
var path = require('path');
var async = require('async');
var serveStatic = require('serve-static')


var app = express();

// app.use(express.cookieParser());
// app.use(express.bodyParser());
// app.use( app.router );
// app.use( express.methodOverride() );
// app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
app.use(serveStatic('./', {'index': ['index.html', 'index.htm']}))
// app.use(serveStatic('./bower_components/semantic-ui/dist'))
app.use(serveStatic('./dist'))
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('index', function(err, html) {
	  res.send(html);
	});
    // res.sendfile('./bower_components/shower-bright/index.html');
});

// [START server]
/* Start the server */
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
  console.log('App listening at http://%s:%s', server.address().address, server.address().port);
  console.log("Press Ctrl+C to quit.");
  console.log("checking if adjustments work");
});
// [END server]