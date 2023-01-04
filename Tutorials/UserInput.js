var Layout = require("Layout");
var layout = new Layout( {
        type:"v", c: [
                {type:"txt", font:"6x8:2", label:"A Test", id:"label"}
        ]
}, {btns:[
        {label:"One", cb: l=>print("One"), cbl: l=>print("One long press")},
        {label:"Two", cb: l=>print("Two")}, 
        {label:"Three", cb: l=>print("Three")} 
], lazy:true} );

function setLabel(x) {
        layout.label.label = x;
        layout.render();
}
g.clear();
layout.render();
