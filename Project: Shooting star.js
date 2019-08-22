var xPos = 10;
var yPos = 10;
var rainXpos = 350;
var rainYpos = 10;
draw = function() {
     background(29, 40, 115);
    fill(255, 242, 0);
    image(getImage ("cute/Star"),xPos, yPos, 40, 40);
    
    xPos++;
    yPos++;
    
    fill(255, 242, 0);
    image(getImage ("avatars/aqualine-seed"),rainXpos, rainYpos, 40, 40);
    
    rainXpos -= 2;
    rainYpos +=2;

};
