var google = require('./GoogleTool.js');


//google.tool.getPosition('http://www.vacosystem.pl/', 'pozycjonowanie siepielski ostrowite').then(function(result) {
//	console.log(result);
//});

google.tool.getPageRank('http://www.vacosystem.pl/').then(function(result) {
	console.log(result);
});
