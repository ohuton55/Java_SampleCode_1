function getImage() {
    return
    require("heatshrink").decompress(atob("mUywkEogA6IggWRoBeGLZ4XBgMjn//mcQDJ4XBiX/AAfzDJwXBiYXEAAPyJpsAgQXGAAMgQJdAgJeBAA/xGRcAj4XIMoK0KGAIsHNIZ+CGQ4wHCIQFCmAyJgBhFLoYiCDBNASQ3wCAUPAwpLFoBJGDCBJGJRhLESYyoEEYQYIMQ6uLJYlAK4QAKcAgYFexRpGDAsAl4YMkAYFMgSUHAAvyC4wYP+Z6FDAoXKmYXIDBfyiIVIDBiOGDCC/GDBZ8FUw4YPGB4YDcAnwDCNAj4YDU5IAFggYCh4YDGB4YDgTDDBgcD/8xDBdEgLEHHBYXCSwgYDGAIABmAYLPoaUDNYacHJIZkEDChLDJR4XEDAIrBDAaEDMRZLCCQKuGGA5JFGQR+BbxoXGGQJlBiD2OGQ8CYBAwLGQcBGCgZDC6oZLC5oZJC56BDO5oAx"));
}
const idle = ["idle1.png", "idle2.png", "idle3.png", "idle4.png"];
var i = 0;
function getBgimg() {
    g.setColor(0x0000FF);
	g.fillRect(0,0,170,170);
	g.setColor(1, 1, 1);
	g.drawRect(0,0,170,170);

    g.setFont("Vector", 40);
}

var ang = 0;
function draw() {
    ang += 0.1;
    g.drawImage(getImage(), 160, 160, { scale: 0.7, rotate: ang });
}
//Testing to draw rotate icon
setInterval(draw, 170);


//First Application(Timer)
var counter = 30;
var counterInterval;

function outOfTime() {
    Bangle.buzz();
    Bangle.beep(200, 3000);
    //.then(() => new Promice(resolve => setTimeout(resolve,200)))
    //.then(() => Bangle.beep(200, 3000));
    // again, 10 secs later
    //setTimeout(outOfTime, 10000);
    getBgimg();
}

function countDown() {
    counter--;
    // Out of time
    if (counter <= 0) {
        clearInterval(counterInterval);
        counterInterval = undefined;
        outOfTime();
        getBgimg();
        g.drawString("Out", 130, 60);
        g.drawString("of", 130, 100);
        g.drawString("Time!", 95, 140);
        setWatch(startTimer, BTN1);
        return;
    }
    g.clearRect(5, 40, 60, 80);
    g.setFontAlign(0, 0);
    g.setFont("6x8", 4);
    g.setColor(1, 1, 1);
    g.drawString(counter, 35, 60);
    g.setColor(0, 0, 0);
    g.drawString("Now", 130, 60);
    g.setFont("6x8", 3);
    g.drawString("Counting", 90, 100);
	g.drawImage(require("Storage").read(idle[i++]), 0, 85, {scale:2});
	if (i == 4) {
    	i = 0;
	}
}


function startTimer() {
    counter = 30;
    countDown();
    getBgimg();
    if (!counterInterval)
        counterInterval = setInterval(countDown, 1000);
}

startTimer();
