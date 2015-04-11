/** 
Seconds: 0-59
Minutes: 0-59
Hours: 0-23
Day of Month: 1-31
Months: 0-11
Day of Week: 0-6    */

exports.cron = {
	storeRankAndPossitionAction : function() {
		var CronJob = require('cron').CronJob;
		var job = new CronJob('20 * * * * *', function() {
  		console.log('hejo');
  		}, function () {
    		// This function is executed when the job stops 
  		},
  		true, // Start the job right now //
  		'Europe/Warsaw' // Time zone of this job. 
		);
	}
}

var storeRankAndPossition = function() {
	var site = require('../db/SiteDao.js');
	var sitePosition = require('../db/SitePositionDao.js');
	var siteRank = require('../db/SiteRankDao.js');
	var google = require('../google/GoogleTool.js');

	site.dao.getByLogin('dibo').then(function(items) {
		//console.log(items.forEach());
		items.forEach(function(item) {

			google.tool.getPageRank(item.url).then(function(result) {
				siteRank.dao.add(item.url, result).then(function(result) {
					console.log(result);
				});	
			});

    		item.tags.forEach(function(tag) {
    			google.tool.getPosition(item.url, tag).then(function(result) {
					sitePosition.dao.add(item.url, result, tag).then(function(result) {
						console.log(result);
					});	
				});
    		});
		});
	});
}


storeRankAndPossition();