var google = require('./GoogleTool.js');


google.tool.getPosition('http://www.xxx.pl/', 'pozycjonowanie').then(function(result) {
	console.log(result);
});

//google.tool.getPageRank('http://www.xxx.pl/').then(function(result) {
//	console.log(result);
//});
