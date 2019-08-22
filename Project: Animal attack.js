var bodyX = 200;
var bodyY = 190;
var bodyW = 100; 
var bodyH = bodyW + 25;
var eyeSize = 20;
var legWidth = 10;
var legLength = 50;
draw = function() {
 stroke(0, 0, 0);
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 108); // body
    ellipse(bodyX, bodyY-74, bodyH, 80); // face
    line(183, 135, 218, 135); //mouth
    line(153,171, 70, 102);// left arm
    line(249, 178, 333, 102);// right arm
    noStroke();
    fill(0, 0, 0);
    ellipse(238, 250, legWidth, legLength); // left leg
    ellipse(220, 264, legWidth, legLength);// second leg
    ellipse(198, 268, legWidth, legLength);// third leg
    ellipse(178, 264, legWidth, legLength);// fourth leg
    ellipse(158, 247, legWidth, legLength);//right leg
    //eyes 
    stroke(0, 0, 0);
    fill(172, 145, 230);
    ellipse(178, 105, eyeSize, eyeSize);//left eye
    ellipse(225, 105, eyeSize, eyeSize);//right eye
    
    eyeSize +=3;
};
