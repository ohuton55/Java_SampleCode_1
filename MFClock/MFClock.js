var bgimg = {
  width : 170, height : 32, bpp : 1,
  transparent : 0,
  buffer : require("heatshrink").decompress((atob("AC0ICicDFSnECaUEmOACiMBxlgFSVqjAUSjUGCiUG2IUSisshQURgpABP5cVPwta4GgChUCEIcEgFWmOoHJYhGkBOMwQ+EgNjjR4Mc4hoB6wTKkUFoBZDgEQIBwAEkuttQNKgNVAocYhtrrXQCpUqSgcgodC6G2CZMQhSUDgMb/+3/uAhu27dsSY2oFQUDpWv3t9sEFqtK1QMB7dt23APIOwmwHB2vdpfv+3b92hqtQgFVqmq1MQqtMqtVlW+2da6/3pf6wM2/dt3Wqip8BitT3379vd7kW2+r0N9qAPB1W/gJaB9uFrnv9NVuHJutt/cBgmq336wtX4A+BrtQg31+kq1Xc5trvX4g0FwtAjkA9X/vuq1UB1Vy1Xfu2wrX+/237GB+sqgF2AQMh9v2/94SgPxoAGB3zEBjc21fbu2NitS1W7q/V+3fq/rmuv9dhMwOdqGggVh29279VrXr1Fs7/85/vvf7m0Nq+oztV9HoqsKwcd1talW3uipB73+wtZ0GHtnYsl9lWr8tFs8/+/L94="))
)};
var moku = {
  width : 32, height : 38, bpp : 1,
  transparent : 0,
  buffer : require("heatshrink").decompress((atob("AAvAAQMBAYMDgfA8EHgeA8EPg+BAYfAh0HwfAjwDOj4DFD4QDCw/BAYOD4PwBQIDD8ADS4ADDKYQnBAYJPCAYOAMgJuCgSRh"))
)};

var coffee = {
  width : 64, height : 64, bpp : 1,
  transparent : 0,
  buffer : require("heatshrink").decompress((atob("AGN////AwcDAwP//AHCj4HC/wWFAAOAA4IGD//ggEB//wEQQDDEYYHBg4rDAgUHBQI7D8AHG/AXF//8g5DDJYP+BQPAIYf+LwYGC/4HF/E/A5vwA59/N4IHEvwHG/wHFK4IHHS4qxCA4p9BV4hsCA4q/GPYgeEN40Ah4+Gcwf//onBn+HCwd/A4IgD+EfwBwE+EP4F8HAbVB4AxBJAXAgfgA4nwA4JJBF4YPDA44XFF4JRCF4V+NIT6BH4M/wD/CKoOAj6CCRgQRBFAIABgYZBg//DAU/P4JmBAYILBJoKnISAgjDUwgACVIQGDAFwA="))
)};

var coffeeMsg = "let's take a break!";

var mokuY = 80;
var cMsgX = 100;
var msgCnt1 = 0;
var msgCnt2 = 0;

require("FontCopasetic40x58Numeric").add(Graphics);

function Fishers() {
  g.clearRect(0,22,176,176);
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var dayOfWeek = date.getDay();
  var dayOfWeekStr = ["sun","mon","tue","wed","thu","fri","sat"][dayOfWeek];
  var hours = date.getHours();
  var minutes = date.getMinutes();

  g.setColor(1, 1, 1);
  g.drawImage(bgimg,0,145);

  g.setFont("Copasetic40x58Numeric");
  g.drawString(hours,g.getWidth()/4.5,g.getHeight()/3.5, true);
  g.drawString(minutes,g.getWidth()/2,g.getHeight()/2.5, true);
  g.setFont("6x8",2);
  g.drawString(month + "/" + day + " " + dayOfWeekStr,50,135, true);

  if (minutes >= 0 && minutes <= 5){

    g.clearRect(14,25,160,160);
    g.drawImage(moku,73,mokuY,{scale:0.8});
    g.clearRect(65,90,100,100);
    g.drawImage(coffee,55,80,true);
    g.drawString(coffeeMsg,cMsgX,140,true);
    g.clearRect(0,140,14,155);
    g.clearRect(160,140,180,155);
    g.drawString(hours + ":" + minutes,17,27,true);
    g.drawRect(14,25,160,160);

    if (msgCnt1 <= 1){
      Bangle.buzz();
      msgCnt1++;
    }
    if (minutes == 5){
      if (msgCnt2 <= 1){
        Bangle.buzz();
        msgCnt2++;
      }
    }

    mokuY = mokuY - 2;
    cMsgX = cMsgX - 7;

    if (mokuY <= 50){
      mokuY = 80;
    }
    if (cMsgX <= -100){
      cMsgX = 180;
    }
  }

}

g.clear();
Fishers();

var secondInterval = setInterval(Fishers, 500);


Bangle.on('lcdPower',on=>{
  if (secondInterval) clearInterval(secondInterval);
    secondInterval = undefined;
  if (on) {
    secondInterval = setInterval(Fishers, 500);
    g.clear();
    Fishers();
  }
});
Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();
