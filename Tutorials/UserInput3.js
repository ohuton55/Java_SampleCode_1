var Layout = require("Layout");
var layout = new Layout({
        type:"v", c: [
                {type:"txt", font:"6x8:2", label:"A Test", id:"label"},
                {type:"btn", font:"6x8:2", label:"Jump", cb: l=>setLabel("Jump")}
        ]
}, lazy:true});

function setLabel(x) {
        layout.label.label = x;
        layout.render();
}
g.clear();
layout.render();
