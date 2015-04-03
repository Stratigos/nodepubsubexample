/**
 * Library to act as interface between application and Redis. Allows for
 *	use as a persistent and shared DB connection.
 */
'use strict';

var redis  = require('redis');
var client = redis.createClient(); // used locally for example (no params)

// Handle errors immediately. Errors on sockets, or errors between server and
//  client, propagate back to the top of the stack. If not handled, the process
//  will exit. Failure to handle errors properly will also leave DB connections
//  open (memory leaks, unresponsiveness).
client.on('error', function(err) {
	// console.log('ERROR (redis.js): ' + err);
	throw err;
});

module.exports = client;