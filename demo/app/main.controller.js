(function(ang) {

	var app = ang.module('app');

	app.controller('ui', ['$scope', '$timeout', '$fb', function($scope, $timeout, $fb) {

		$timeout(function() {
			$fb.api({
				path    : '/me',
				params  : {
					fields  : 'name'
				}
			}).then(function(resp) {
				console.log(resp);
			});			
		}, 1000);


	}]);

})(angular)