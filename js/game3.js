let rad = 70;
let xpos = 620, ypos = 350;

let xspeed = 1.5;
let yspeed = 1.0;

let xdirection = 1;
let ydirection = 1;

let mousePos = 0;

let cx;
let cy;
let circleSize = 60;
let overCircle = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

let flag3 = true;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
    frameRate(30);
    ellipseMode(RADIUS);
    // Set the starting position of the shape
    width = 700
    height = 350
    xpos = width / 2;
    ypos = height / 2;

}

function game3() {
    background(bcolor);
  
    //Buttons
    submitButton();
    
    fill('#BBF291');
    rect(270, 120, 700, 60, 20);
    textFont('ABeeZee');
    fill('black');
    textSize(32);
    text("Follow the circle:", 500, 160);

    fill('white');
    rect(270, 200, 700, 350, 20);
    
    if (flag3) {
        xpos = xpos + xspeed * xdirection;
        ypos = ypos + yspeed * ydirection;

        if (xpos < 270 + (rad / 2) || xpos > 970 - (rad / 2)) {
            xdirection *= -1;
        }
        if (ypos < 200 + (rad / 2) || ypos > 550 - (rad / 2)) {
            ydirection *= -1;
        }
        fill('#BBF291');
        circle(xpos, ypos, rad);
    }
    else {
        fill('red');
        circle(xpos, ypos, rad);
    }
    
}

let state = "game3";

function draw() {
    if (state == "game3") {game3();}
    else if (state == "about3") {about3();}
    else { background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    if (state == "game3") {
        //After hitting submit button
        if (mouseX > 1000 && mouseX < 1120 && mouseY > 500 && mouseY < 580) {window.location = "./result3.html";}
    }

    //About 2 Page
    else if (state == "about3") {
      //Going to main menu page
      if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
      //Going back to game 2 page
      if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {window.location = "./game3.html";}
    }
}

function mouseMoved() {
    let d3 = dist(mouseX, mouseY, xpos, ypos);
    if (d3 < 35) {
        console.log("hello");
    }
    else {
        flag3 = false;
    }
}