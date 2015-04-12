var express = require("express");

var app = express();

module.exports = {
	run : function() {
		app.use(express.static(__dirname + '/public_html'));
		
		app.listen('3000',function(){
      		console.log("It's Started on PORT 3000" );
    	});
	}
}