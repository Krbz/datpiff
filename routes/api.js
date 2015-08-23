/*
 * Serve JSON to our AngularJS client
 */

exports.public = function (req, res) {
  res.json({
  	pub: {
  		app: {
  			name: 'Datpiff',
  			version: '0.0.1',
  			author: 'Krbz'
  		}
  	}
  });
};