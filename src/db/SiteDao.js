var Q = require('q');

var Engine = require('tingodb')();
var db = new Engine.Db(__dirname + '/data', {});

exports.dao = {
  tableName : 'page',
  add : function(page) {
  	var deferred = Q.defer();
  	console.log("Add function invoked");
  	var collection = db.collection(this.tableName);
  	collection.insert(page, function(err, result) {
  		if(err){
  			deferred.reject(new Error(err));
  		} else {
  			deferred.resolve(result);
  		}
  	});
  	return deferred.promise;
  },
  getByLogin : function(login) {
  	var deferred = Q.defer();
  	var collection = db.collection(this.tableName);
  	collection.find({ login : login}, function(err, items) {
  		if (err) {
            deferred.reject(new Error(err));
        } else {
        	items.toArray(function(err, it) {
				if(err) {
					deferred.reject(new Error(err));
				} else {
					deferred.resolve(it);
				}
			});
        }
  	})
  	return deferred.promise;
  },
  update : function(id, newPage) {
  	var deferred = Q.defer();
  	var collection = db.collection(this.tableName);
  	collection.update({ '_id' : id } , newPage, function(err, result) {
  		if(err) {
  			deferred.reject(new Error(err));
  		} else {
  			deferred.resolve(result);
  		}
  	});
  	return deferred.promise;
  }
}