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