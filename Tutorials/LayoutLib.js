var Layout = require("Layout");
var layout = new Layout( {
        type:"v", c: [
                {type:"txt", font:"6x8", label:"Hello World"}
        ]
});
g.clear();
layout.render();
