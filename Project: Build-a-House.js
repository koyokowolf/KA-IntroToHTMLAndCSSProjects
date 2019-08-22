background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);

fill (255, 0, 0);
var x= 99;
while (x < 265) {
    rect (x, 203, 50, 50);
    x += 150;
}
var x = 0;
var hedge = getImage("cute/GrassBlock");
 while (x < 161) {
    image(hedge, x, 285, 40, 113);
    x += 35;
 }
 var x =221;
 while (x <380) {
    image(hedge, x, 286, 40, 113);
    x += 35;
 }
