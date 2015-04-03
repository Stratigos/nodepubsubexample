/**
 * PubSub application BadgesController
 */
'use strict';

var _     = require('underscore');
var model = require('../models/badge');

/**
 * Send badges to model. The HTTP request data will be sent to the model,
 *  which will have the responsibility of storing the data. For the sake of
 *  this example of this example app, we will be using Redis to store the data.
 */
exports.save = function(req, res, nextFunction) {
    // using underscore to clone request.body, as to prevent manipulating
    //  the request data for the remaining middleware methods
    var badges = _.clone(req.body); 

    model.save(badges, function(err) {
        if (err) {
            // Calling return in middleware such as this halts sequence of 
            //  function calls for this request and route.
            // Response.json() jsonifies object and adds appropriate content
            //  headers. Using HTTP Status 503.
            return res.json(503, {error: true});
        }
        // Continue to next middleware method assigned in app.js route.
        nextFunction();
        // express allows for async execution, so code after the next route 
        //  middleware method is called (next() / nextFunction()) can still be
        //  run (in contrast to a return statement finalizing the method, or 
        //  the process waiting for nextFunction() to return before proceeding)
        // trim() caps the size of the hash in redis (@see badge model)
        model.trim();
    });
};

/**
 * Send badges to pub/sub socket in model.
 */
exports.send = function(req, res, nextFunction){
    var badges = _.clone(req.body);
    model.send(badges, function (err) {
        if (err) {
            return res.json(503, {error: true});
        }
        res.json(200, {error: null});
    });
};