var Layout = require("Layout");
var layout = new Layout( {
	type:"v", c: [
		{type:"txt", font: "20%", label:"12:00", id:"time"},
		{type:"txt", font: "6x8", label:"The Date", id:"date" }
	]
}, {lazy:true});

//timeout used to update every minute
var drawTimeout;

//update the screen
function draw() {
	var d = new Date();
	//update time and date
	layout.time.label = require("locale").time(d,1);
	layout.date.label = require("locale").date(d);
	//schedule a draw for next minute
}
g.clear();
layout.render();