var Layout = require("Layout");
var layout = new Layout( {
        type:"v", c: [
                {type:"txt", font"6x8:2", label:"A Test", id:"label"},
                {type:"btn", font"6x8:2", label:"One", cb: l=>setLabel("one")},
                {type:"btn", font"6x8:2", label:"Two", cb: l=>setLabel("Two")}
        ]
}, {btns:[
        {label:"Three", cb: l=>setLabel("Three")}
], lazy:true});

function setLabel(x) {
        layout.label.label = x;
        layout.render();
}
g.clear();
layout.render();
