var Q = require('q');
var moment = require('moment');

var Engine = require('tingodb')();
var db = new Engine.Db(__dirname + '/data', {});

exports.dao = {
	tableName : 'pageRank',
	add : function(url, rank) {

		var select = {
			year : moment().format('YYYY'),
			month : moment().format('MM'),
			day : moment().format('DD'),
			url : url
		};

		var newEntity = {
			year : moment().format('YYYY'),
			month : moment().format('MM'),
			day : moment().format('DD'),
			url : url,
			rank : rank
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