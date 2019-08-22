var xPositions = [50, 100, 150, 200, 250];
var yPositions = [5, 10, 15, 20, 25];
for(var count = 0; count<50; count++){
xPositions.push(random(0,400));
yPositions.push(random(0,400));
}
draw = function() {
    background(7, 92, 105);
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 64, 255);
        ellipse(xPositions[i], yPositions[i], 5, 10);
        yPositions[i] += 5;
        if(yPositions[i] > 450) {
            yPositions[i] = 0;
    }
}
mouseClicked = function() {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
};
};
