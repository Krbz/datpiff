/*
 * Serve JSON to our AngularJS client
 */

exports.users = function (req, res) {
  res.json({
  	name: 'Bob',
  	ver: '0.1'
  });
};