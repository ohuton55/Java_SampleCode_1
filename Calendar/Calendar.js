var rabit = {
  width : 30, height : 37, bpp : 3,
  transparent : 0,
  buffer : require("heatshrink").decompress(atob("AEkP/EAv/ABQsD/0Aj/wCw3/wEH/gKGn/ggP/Fn4sJg//+E/Fg1//4ACBQsfBQYsFEAIACFgkSpP/yQjBFgkEBAPkz4sFgMkz/5k4sHn4sIC4IKDLLiGBBYaVBWYoACSoJEJwCzFBQfgFjRZEKApZEC4qzEIgqGEIhAAdA=="))
};
var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var sun = [];
var mon = [];
var tue = [];
var wed = [];
var thu = [];
var fri = [];
var sat = [];
var x = 160;
var y = 152;
function MakeMonth(diff) {
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  if (month == 11) {
    if (diff == 0) {
      return months[11];
    } else { return months[0];}
  } else {
    return months[month + diff];
  }
}
var nextmonth = MakeMonth(1);
var lastdate = new Date(`${nextmonth} 0, ${year}`).getDate();
function MakeWeeks() {
  var weeks = ["S","M","T","W","T","F","S"];
  return weeks;
}
function Setting() {
  g.clearRect(0,22,176,176);
  require("Font6x8").add(Graphics);
  g.fillRect(0,0,176,30);
}
function MakeDays() {
  var lastdays = lastdate + 1;
  var thismonth = MakeMonth(0);
  for (let i = 1; i < lastdays; i++) {
    var ckday = new Date(`${thismonth} ${i}, ${year}`).getDay();
    if (ckday == 0) {
      sun.push(i);
    } else if (ckday == 1) {
      mon.push(i);
    } else if (ckday == 2) {
      tue.push(i);
    } else if (ckday == 3) {
      wed.push(i);
    } else if (ckday == 4) {
      thu.push(i);
    } else if (ckday == 5) {
      fri.push(i);
    } else{
      sat.push(i);
    }
  }
}
function SayTitle() {
  week = MakeWeeks();
  month = MakeMonth(0);
  g.setColor(0,0,0);
  g.setFont("4x6", 3);
  g.drawString(month, 20, 15, false);
  g.drawString(year, 100, 15, false);
  g.setColor(1,1,1);
  g.setFont("6x8", 1);
  for (let i = 1; i<8; i++) {
    g.drawString(week[i - 1], i * 20, 35, true);
  }
  g.drawLine(20,42,140,42);
}
function FitWeek(week) {
  if (sat[0] < week[0]) {
    return 20;
  } else {
    return 0;
  }
}
function CallWeek(week) {
  var m = week.length;
  add2 = 0;
  if (week == sun) {
    wcol = 0;
    add2 = FitWeek(week);
  } else if (week == mon) {
    wcol = 20;
    add2 = FitWeek(week);
  } else if (week == tue) {
    wcol = 40;
    add2 = FitWeek(week);
  } else if (week == wed) {
    wcol = 60;
    add2 = FitWeek(week);
  } else if (week == thu) {
    wcol = 80;
    add2 = FitWeek(week);
  } else if (week == fri) {
    wcol = 100;
    add2 = FitWeek(week);
  } else { wcol = 120;}
  for (let i = 0; i < m; i++) {
    var add = (i + 1) * 20;
    g.drawString(week[i], 20 + wcol, 40 + add + add2, true);
  }
}
function SayDate() {
  CallWeek(sun);
  CallWeek(mon);
  CallWeek(tue);
  CallWeek(wed);
  CallWeek(thu);
  CallWeek(fri);
  CallWeek(sat);
}
function GoRabit() {
  g.clearRect(x, y, x + 40, y + 40);
  x = x - 6;
  if (x < 10) {
    x = 180;
  }
  g.drawImage(rabit, x, y,{scale:0.7,rotate:70});
}
Setting();
MakeDays();
SayTitle();
SayDate();
setInterval(GoRabit, 500);
