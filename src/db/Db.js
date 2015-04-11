var Engine = require('tingodb')();
var db = new Engine.Db('./data', {});


var site = require('./SiteDao.js');
page = {
	'url' : 'http://www.wp.pl/',
	'login' : 'dibo',
	'tags' : ['pozycjonowanie','pozycjonowanie']
};

//site.dao.add(db, page);
//site.dao.getByLogin(db, 'dibo');

site.dao.add(page).then(function(result) {
	console.log(result);
})

//site.dao.getByLogin(db, 'dibo').then(function(items) {
//	console.log(items);
//});

//site.dao.update(db, '2', page).then(function(result) {
//	console.log(result);
//});





