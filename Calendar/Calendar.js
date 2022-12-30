function Setting() {
  g.clearRect(0,22,176,176);
  require("Font4x5").add(Graphics);
  g.setFont("4x5", 2);
}


function SayHello() {
  g.drawString("hello world!", 40, 40, true);
}
Setting();
SayHello();
