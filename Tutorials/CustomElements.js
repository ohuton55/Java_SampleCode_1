//some data to graph
var data = new Array(16);
data.fill(0);

//Our custom renderer that draws a graph inside the layout
function renderGraph(l) {
        require("graph").drawBar(g, data, {
                miny: 0,
                axes: true,
                x:l.x, y:l.y, width:l.w, height:l.h
        });
}

//The layout, referencing the custom renderer
var Layout = require("Layout");
var layout = new Layout({
        type:"v", c: [
                {type:"custom", render:renderGraph, id:"graph", bgCol:g.theme.bg, fillx:1, filly:1},
                {type:"h", c: [
                        {type:"btn", label:"Clear", cb: l=>{ data.fill(0); layout.render(layout.graph); }},
                        {type:"btn", label:"Random", cb: l=>{ data=data.map(x=>Math.random()); layout.render(layout.graph); }},
                ]}
        ]

});

g.clear();
layout.render();
