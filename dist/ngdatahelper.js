angular.module("ngDataHelper",[]).factory("Data",function(a){var b={};return b.apiUrl="",b.getOutside=function(b,c){return c="undefined"!=typeof c?c:{},a.get(b,c).then(function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b},function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b})},b.get=function(b,c){return c="undefined"!=typeof c?c:{},console.log("GET",serviceBase+b),a.get(serviceBase+b,c).then(function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b},function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b})},b.post=function(b,c){return a.post(serviceBase+b,c).then(function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b},function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b})},b.put=function(b,c){return a.put(serviceBase+b,c).then(function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b},function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b})},b.putOutside=function(b,c){return a.put(b,c).then(function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b},function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b})},b["delete"]=function(b){return a["delete"](serviceBase+b).then(function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b},function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b})},b.deleteOutside=function(b){return a["delete"](b).then(function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b},function(a){var b={data:a.data,headers:a.headers,status:a.status,config:a.config};return b})},b});