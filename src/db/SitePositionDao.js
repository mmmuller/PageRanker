var Q = require('q');
var moment = require('moment');

var Engine = require('tingodb')();
var db = new Engine.Db(__dirname + '/data', {});

exports.dao = {
	tableName : 'pagePosition',
	add : function(url, position, query) {

		var select = {
			year : moment().format('YYYY'),
			month : moment().format('MM'),
			day : moment().format('DD'),
			url : url,
			query : query
		};

		var newEntity = {
			year : moment().format('YYYY'),
			month : moment().format('MM'),
			day : moment().format('DD'),
			url : url,
			position : position,
			query : query
		};

		var deferred = Q.defer();
  		console.log("Add function invoked");
  		var collection = db.collection(this.tableName);
  		collection.update(select, newEntity, { upsert: true }, function(err, result) {
  			if(err){
  				deferred.reject(new Error(err));
  			} else {
  				deferred.resolve(result);
  			}
  		});
  		return deferred.promise;
	}
}