//canvas sizes
function setup() {
  createCanvas(500, 400);
}
draw = function () {
background (240, 230, 163);

//peas
noStroke();
fill(7, 212, 27);

var peas = function (x, y) {
ellipse (x, y, 10, 10);
};
peas(222, 233);
peas(232, 231);
peas(242, 230);
peas(252, 230);
peas(262, 230);
peas(272, 230);
peas(282, 231);
peas(282, 241);

//rices
fill (255, 250, 250);
for (var riceY = 0; riceY < 4; riceY++) {
    for (var riceX = 120 + (riceY * 10); riceX < 230 - (riceY * 5); riceX += 15) {
        ellipse(riceX, 243 - (riceY * 5), 15, 5);
    }
}

//fish
stroke (0, 0, 0);
fill (255, 255, 0);
ellipse (255, 240, 55, 15);
triangle (283, 240, 293, 230, 293, 250);

//bowl
fill (70, 90, 219);
arc (200, 245, 180, 145, 0, 135);

//chopsticks
fill (255, 0, 0);
triangle (105, 210, 110, 205, 185, 235);
triangle (105, 200, 110, 195, 185, 225);
  
};

//still need to fix the arc on bowl