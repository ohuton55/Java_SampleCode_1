var Layout = require("Layout");
var layout = new Layout( {
        type:"v", c: [
                {type:"txt", font:"30%", label:"12:00", id:"time"},
                {type:"txt", font:"6x8", label:"The Date", id:"date"}
        ]
}, {lazy:true});
//timeout used to update every miinute.
var drawTimeout;
//update the screen
function draw() {
        var d = new Date();
        //update time and date
        layout.time.label = require("locale").time(d,1);
        layout.date.label = require("locale").date(d);
        layout.render();
        //schedule a draw for the next minute
        if (drawTimeout) clearTimeout(drawTimeout);
        drawTimeout = setTimeout(function() {
                drawTimeout = undefined;
                draw();
        }, 60000 - (Date.now() % 60000));
}
//update time and draw
g.clear();
draw();
