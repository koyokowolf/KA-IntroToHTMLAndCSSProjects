background(89, 216, 255);
var centerX; 
var centerY; 
var bodyLength;
var bodyHeight;
var bodyColor;
var tailWidth = bodyLength;
var tailHeight = bodyHeight;
var createFish = function(centerX,centerY,bodyLength,bodyHeight,bodyColor,tailWidth,tailHeight){
    
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    
    triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
         
         
};

createFish(200,100,118,74,color(162, 0, 255),bodyLength/4,bodyHeight/2);
createFish(100,200,50,100,color(255,0,0),bodyLength/3,bodyHeight);
createFish(300,300,74,118,color(250, 153, 8),bodyLength,bodyHeight/2);
