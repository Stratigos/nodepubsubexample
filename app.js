/**
 * example use of express. simple app that listens on port 8000 for HTTP POST
 *  and prints a sentence.
 */
'use strict';

var express = require('express'); // import express library
var app     = express();          // create instance of express

// app.use() declares middleware for the request before routing occurrs
//  express.json() causes the request body to be parsed as JSON
app.use(express.json());

// route for POST request to '/'
app.post('/', function(req, res){
    res.send("\n\nrubber baby buggy bumpers\n\n"); // send() text to the response
});

app.listen(8000); // listen for requests to this server on port 8000