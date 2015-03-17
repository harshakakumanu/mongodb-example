/**
 * Created by harshavardhan on 15-02-17.
 */
var jwt = require('jwt-simple');
var config = require('./config');

module.exports = function (req, res, next) {
	if (req.headers['x-auth']) {
		req.auth = jwt.decode(req.headers['x-auth'], config.secret);
	}
	next()
}