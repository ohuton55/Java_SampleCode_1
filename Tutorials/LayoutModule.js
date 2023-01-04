var Layout = require("Layout");
var layout = new Layout( {
        type:"v", c: [
                {type:"txt", font:"30%", label:"12:00", id:"time"},
                {type:"txt", font:"6x8", label:"The Date", id:"date"}
        ]
});
g.clear();
layout.render();

function draw() {
        var d = new Date();
        // update time
        var timeStr = require("locale").time(d,1);
        layout.clear(layout.time); // remove old time
        layout.time.label = timeStr;
        layout.render(layout.time); // redraw
        // check date and update if needed
        var dateStr = require("locale")date(d);
        if (layout.date.label != dateStr) {
                layout.clear(layout.date); // remove old date
                layout.date.label = dateStr;
                layout.render(layout.date); // redraw
        }

        queueDraw();
}

// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() {
        if (drawTimeout) clearTimeout(drawTimeout);
        drawTimeout = setTimeout(function() {
                drawTimeout = undefined;
                draw();
        }, 60000 - (Date.now() % 60000));
}
draw();
