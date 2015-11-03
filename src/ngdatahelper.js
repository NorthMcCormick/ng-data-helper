angular.module('ngDataHelper', [])

.factory('Data', function($http){
  var obj = {};

  //var apiBase = appSettings.apiUrl;

  //var serviceBase = apiBase + 'index.php/';
 // var serviceBase = apiBase;
  //var serviceBase = 'http://api2.redfitapp.com/index.php/';

  	obj.apiUrl = '';//apiBase;

    obj.getOutside = function (q, opts) {
        opts = typeof opts !== 'undefined' ? opts : {};
        return $http.get(q, opts).then(function (results) {
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

    obj.get = function (q, opts) {
        opts = typeof opts !== 'undefined' ? opts : {};
        console.log("GET", serviceBase + q);
        return $http.get(serviceBase + q, opts).then(function (results) {
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

    obj.post = function (q, object) {
        return $http.post(serviceBase + q, object).then(function (results) {
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

    obj.put = function (q, object) {
        return $http.put(serviceBase + q, object).then(function (results) {
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

    obj.putOutside = function (q, object) {
        return $http.put(q, object).then(function (results) {
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

    obj.delete = function (q) {
        return $http.delete(serviceBase + q).then(function (results) {
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

    obj.deleteOutside = function (q) {

        return $http.delete(q).then(function (results) {
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
})