var Layout = require("Layout");
var layout = new Layout( {
        type:"h", c: [
                {type:"img", pad:4, src:function() { return require("heatshrink").decompress(atob("ikUwYFCgVJkgMDhMkyVJAwQFCAQNAgESAoQCBwEBBwlIgAFDpNkyAjDkm/5MEBwdf+gUEl/6AoVZkmX/oLClv6pf+DQn1/4+E3//0gFBkACBv/SBYI7D5JiDLJx9CBAR4CAoWQQ4Z9DgAA==")); },
                },
                {type:"txt", font:"6x8:2", label:"All ok"}
        ]
});

g.clear();
layout.render();
