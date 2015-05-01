(function(ang) {

	var app = ang.module('app');

	app.config(function($urlRouterProvider, $stateProvider, $fbProvider) {
		
		$fbProvider.init({
			appId	: '1442825702694510',
			xfbml	: true,
			status	: true,
			cookie	: true,
			version	: 'v2.3'
		});

	});

})(angular)