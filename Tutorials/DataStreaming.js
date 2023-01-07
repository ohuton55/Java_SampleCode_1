//Code to upload to Bangle.js
var BANGLE_CODE = `
Bangle.on('accel',function(a) {
    var d = [
        "A",
        Math.round(a.x*100),
        Math.round(a.y*100),
        Math.round(a.z*100)
        ];
    Bluetooth.println(d.join(","));
})
`;
// When we click the connect button...
var connection;
document.getElementById("btnConnect").addEventListener("click", function() {
    // disconnect if connected already
    if (connection) {
        connection.close();
        connection = undefinded;
    }
    // Connect
    Puck.connect(function(c) {
        if (!c) {
            alert("Couldn't connect!");
            return;
        }
        connection = c;
        // Handle the data we get back, and call 'online'
        // whenever we get a line
        var buf = "";
        connection.on("data", function(d) {
            buf += d;
            var l = buf.split("\n")
            buf = l.pop();
            l.forEach(onLIne);
        });
        // First, reset the Bangle
        connection.write("reset();\n", function() {
            //wait for it to reset itself
            setTimeout(function() {
                //Now upload our code to it
                connection.write("\x03\x10if(1){"+BANGLE_CODE+"}\n",
                    function() { console.log("Ready..."); });
        
                
            }, 1500);
        });
    });
});
         
