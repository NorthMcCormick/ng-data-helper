angular.module('ngDataHelper', [])

.factory('Data', ['$http', function($http) {
	var opts = {
		log: false,
		api : '',
		callOpts: { 
			test: 1234
		}
	}
	
	var obj = {};

	obj.setOptions = function(_opts) {
		/*
			
		*/
		Object.assign(opts, _opts);
	}

	obj.get = function (q, _opts, isRemote) {
		_opts = typeof _opts !== 'undefined' ? _opts : {};

		Object.assign(_opts, opts.callOpts);

		if(opts.log) console.log("GET", opts.api, q, _opts);

		if(isRemote) {
			var url = opts.api + q;
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

		if(opts.log) console.log("POST", opts.api, q, _opts);

		if(isRemote) {
			var url = _opts.api + q;
		}else{
			var url = q;
		}

		return $http.post(url, object, _opts).then(function (results) {
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

		if(opts.log) console.log("PUT", opts.api, q, _opts);

		if(isRemote) {
			var url = _opts.api + q;
		}else{
			var url = q;
		}

		return $http.put(url, object, _opts).then(function (results) {
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

		if(opts.log) console.log("DELETE", opts.api, q, _opts);

		if(isRemote) {
			var url = _opts.api + q;
		}else{
			var url = q;
		}

		return $http.delete(url, _opts).then(function (results) {
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