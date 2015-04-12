var Q = require('q');
var sha1 = require('sha1');

var Engine = require('tingodb')();
var db = new Engine.Db(__dirname + '/data', {});

exports.dao = {
	tableName : 'user',
	add : function(user) {
		var deferred = Q.defer();
		user.password = sha1(user.password);
		console.log("Add function invoked");
  		var collection = db.collection(this.tableName);
  		collection.insert(user, function(err, result) {
  			if(err){
  				deferred.reject(new Error(err));
  			} else {
  				deferred.resolve(result);
  			}
  		});
  		return deferred.promise;
	},
	emailExist : function(email) {
  		var deferred = Q.defer();
  		var collection = db.collection(this.tableName);
  		collection.findOne({ email : email}, function(err, item) {
  			if (err) {
       	    	deferred.reject(new Error(err));
       	 	} else {
        		deferred.resolve(item !== null);
        	}
  		})
  		return deferred.promise;
  	},
  	loginExist : function(login) {
  		var deferred = Q.defer();
  		var collection = db.collection(this.tableName);
  		collection.findOne({ login : login}, function(err, item) {
  			if (err) {
       	    	deferred.reject(new Error(err));
       	 	} else {
        		deferred.resolve(item !== null);
        	}
  		})
  		return deferred.promise;
  	},
  	loginPassowordCorrect : function(login , password) {
  		var deferred = Q.defer();
  		password = sha1(password);
  		var collection = db.collection(this.tableName);
  		collection.findOne({ login : login, password : password}, function(err, item) {
  			if (err) {
       	    	deferred.reject(new Error(err));
       	 	} else {
        		deferred.resolve(item !== null);
        	}
  		})
  		return deferred.promise;
  	}
}