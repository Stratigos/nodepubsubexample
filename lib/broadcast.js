/**
* Library for helping with broadcasting between sockets.
*   Uses `axon` message socket library.
*/
'use strict';

var axon = require('axon');
var sock = axon.socket('pub'); // publishing socket

 // listen on port 8001, our http server is listening on 8000
 //  @see app.js
sock.bind(8001);

/**
 * Sends a badge to the publish socket.
 */
exports.send = function(badge) {
    sock.send(badge);
};