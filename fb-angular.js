(function(ang) {

	var module = ang.module('fb-api', []);

	module.factory('FBApiAngular', ['$window', '$q', function($window, $q) {

		// Import
			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));

		// Init
			return function(config) {
				// Init
					$window.fbAsyncInit = function() {
						FB.init(config);
					}
				// Attributes
					var self = this;
				// Methods
					self.getStatus = function() {
						var deferred = $q.defer();
						FB.getLoginStatus(function(resp) {
							deferred.resolve(resp);
						});
						return deferred.promise;
					}

					self.login = function(opts) {
						opts = (opts || {});
						var deferred = $q.defer();
						FB.login(function(resp) {
							deferred.resolve(resp);
						}, opts);
						return deferred.promise;
					}

					self.api = function(params) {
						var deferred = $q.defer();
						params = (params || {});
						params.method = (params.method || 'get');
						params.params = (params.params||{});
						FB.api( params.path, params.method, params.params, function(resp) {
							deferred.resolve(resp);
						});
						return deferred.promise;
					}

			}
	}]);


	module.factory('$fb', ['FBApiAngular', function(FBApiAngular) {
		return new FBApiAngular();
	}]);

	module.provider('$fb', function() {
		var config = {};
		this.init = function(conf) {
			config = conf;
		}
		this.$get = ['FBApiAngular', function(FBApiAngular) {
			return new FBApiAngular(config);
		}];
	});

})(angular)