(function(ang) {

	var app = ang.module('app');

	app.config(['$fbProvider', function($fbProvider) {
		
		$fbProvider.init({
			appId	: '1442825702694510',
			xfbml	: true,
			status	: true,
			cookie	: true,
			version	: 'v2.3'
		});

	}]);

})(angular)