'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "ACMEhash.com",
		api_url : 'http://127.0.0.1/api',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});
