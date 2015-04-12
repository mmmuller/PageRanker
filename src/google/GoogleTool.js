var google = require('google-tools');
var Q = require('q');


exports.tool = {
	getPosition : function(url, query) {
		var deferred = Q.defer();
		google.position({
    		url: url,
    		q: query,
    		num: 100, // maximum position
    		start: 0
		}, function(err, result) {
    		if(err){
  				deferred.reject(new Error(err));
  			} else {
  				deferred.resolve(result === -1 ? null : result);
  			}
		});
		return deferred.promise;
	},
	getPageRank : function(url) {
		var deferred = Q.defer();
		google.pagerank({
  			url: url
		}, function(err, result) {
    		if(err){
  				deferred.reject(new Error(err));
  			} else {
  				deferred.resolve(result);
  			}
		});
		return deferred.promise;
	}
}

