var Engine = require('tingodb')();
var db = new Engine.Db('./data', {});


var site = require('./SiteDao.js');
page = {
	'url' : 'http://www.wp.pl/',
	'login' : 'dibo',
	'tags' : ['pozycjonowanie','pozycjonowanie']
};

u = {
	'login' : 'dibo',
	'password' : '12345',
	'email' : 'sdsd@wp.pl',
	'name' : 'Jan',
	'surname' : 'Kowalski',
	'active' : true
}

var user = require('./UserDao.js');
//user.dao.add(u).then(function(result) {
//	console.log(result);
//});

user.dao.loginPassowordCorrect('dibo','123454').then(function(result) {
	console.log(result);
});

//user.dao.loginExist('dibo2').then(function(result) {
//	console.log(result);
//});

//site.dao.add(db, page);
//site.dao.getByLogin(db, 'dibo');

//site.dao.add(page).then(function(result) {
//	console.log(result);
//})

//site.dao.getByLogin(db, 'dibo').then(function(items) {
//	console.log(items);
//});

//site.dao.update(db, '2', page).then(function(result) {
//	console.log(result);
//});





