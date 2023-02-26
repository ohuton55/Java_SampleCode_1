
const idle = ["idle1.png", "idle2.png", "idle3.png", "idle4.png"];
var i = 0;
var ang = 0;
var bgang = 0;

function CatFight() {
  g.clearRect(0,22,176,176);
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var dayOfWeek = date.getDay();
  var dayOfWeekStr = ["sun","mon","tue","wed","thu","fri","sat"][dayOfWeek];
  var hours = date.getHours();
  var minutes = date.getMinutes();

  bgang -= 1;
  g.drawImage(require("Storage").read("catBgimg2.png"), bgang, 70, {scale:2});
  if (bgang <= -160) {
	bgang = 0;
  }
  if (i == 4) {
    i = 0;
  }
  ang += 0.05;
  g.drawImage(require("Storage").read(idle[i++]), 0, 85, {scale:2});
  g.drawImage(require("Storage").read("sun.png"), 150, 50, {rotate: ang});

  g.setColor(1, 1, 1);
  require("Font4x5").add(Graphics);
  g.setFont("4x5",4);
  g.drawString(hours + ":" + minutes, 40,40, true);
  g.setFont("4x5",2);
  g.drawString(month + "/" + day + " " + dayOfWeekStr,110,165, true);

}
g.clear();
CatFight();
var secondInterval = setInterval(CatFight, 200);

Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();

