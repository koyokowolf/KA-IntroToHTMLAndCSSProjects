fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(0, 6));
if (answer === 0) {
    text("LEVEL NOT", 168, 200);
    text("REACHED", 167, 229); 
}
else if (answer === 5){
    text("YOU HAVE", 176, 200);
    text("ARRIVED", 173, 229);
}
else {
   text("LEVEL", 176,200);
   text(answer, 222, 200);
   text("REACHED", 173, 229);
}
