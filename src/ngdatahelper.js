angular.module('ngDataHelper', [])

.factory('Data', ['$http', function($http) {
	var opts = {
		headers : {},
		log: false,
		apiBase : '',
		callOpts: {
			test: 1234
		}
	}
	var obj = {};

	obj.setOptions = function(opts) {

	}

	obj.get = function (q, _opts, isRemote) {
		_opts = typeof _opts !== 'undefined' ? _opts : {};

		Object.assign(_opts, opts.callOpts);

		if(log) console.log("GET", opts.apiBase + q, _opts);

		if(isRemote) {
			var url = opts.apiBase + q;
		}else{
			var url = q;
		}

		return $http.get(url, _opts).then(function (results) {
			var dpackage = {
				data: results.data,
				headers: results.headers,
				status: results.status,
				config: results.config
			}

			return dpackage;
		}, function(results){
			var dpackage = {
				data: results.data,
				headers: results.headers,
				status: results.status,
				config: results.config
			}

			return dpackage;
		});
	};

	obj.post = function (q, object, opts, isRemote) {
		_opts = typeof _opts !== 'undefined' ? _opts : {};

		Object.assign(_opts, opts.callOpts);

		if(isRemote) {
			var url = _opts.apiBase + q;
		}else{
			var url = q;
		}

		return $http.post(url, object, opts).then(function (results) {
			var dpackage = {
				data: results.data,
				headers: results.headers,
				status: results.status,
				config: results.config
			}

			return dpackage;
		}, function(results){
			var dpackage = {
				data: results.data,
				headers: results.headers,
				status: results.status,
				config: results.config
			}

			return dpackage;
		});
	};

	obj.put = function (q, object, opts, isRemote) {
		_opts = typeof _opts !== 'undefined' ? _opts : {};

		Object.assign(_opts, opts.callOpts);

		if(isRemote) {
			var url = _opts.apiBase + q;
		}else{
			var url = q;
		}

		return $http.put(url, object).then(function (results) {
			var dpackage = {
				data: results.data,
				headers: results.headers,
				status: results.status,
				config: results.config
			}

			return dpackage;
		}, function(results){
			var dpackage = {
				data: results.data,
				headers: results.headers,
				status: results.status,
				config: results.config
			}

			return dpackage;
		});
	};

	obj.delete = function (q, opts, isRemote) {
		_opts = typeof _opts !== 'undefined' ? _opts : {};

		Object.assign(_opts, opts.callOpts);

		if(isRemote) {
			var url = _opts.apiBase + q;
		}else{
			var url = q;
		}

		return $http.delete(url, opts).then(function (results) {
			var dpackage = {
				data: results.data,
				headers: results.headers,
				status: results.status,
				config: results.config
			}

			return dpackage;
		}, function(results){
			var dpackage = {
				data: results.data,
				headers: results.headers,
				status: results.status,
				config: results.config
			}

			return dpackage;
		});
	};

	return obj;
}]);