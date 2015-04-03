/**
 * PubSub application Badge model.
 */
'use strict';

var redis = require('../lib/redis');

/**
 * Saves array of `badges` to database (Redis)
 * @param {Array} badges
 *	Codeschool badge earning data. 
 * @param {Function} callback
 *	Tells evoker of this model method when model is finished.
 */
exports.save = function(badges, callback) {
	if (!badges.length) {
		return callback(null, null);
	}
	var badge = badges.pop();
	redis.lpush('badges', JSON.stringify(badge), function(err) {
		if (err) {
			return callback(err, null);
		}
		exports.save(badges, callback);
	});

};

/**
 * Trim down the redis list. Essentially caps the size of the hash
 *	stored in `redis-server` to 10 items.
 */
 exports.trim = function() {
 	redis.ltrim('badges', 0, 9);
 };