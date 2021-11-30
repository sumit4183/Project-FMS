let rad = 70;
let xpos = 620, ypos = 250;

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

let timerValue31 = 30;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
    frameRate(30);
    ellipseMode(RADIUS);
}

function game3() {
    background(bcolor);
    
    fill('#BBF291');
    rect(270, 120, 700, 60, 20);
    textFont('ABeeZee');
    fill('black');
    textSize(32);
    text("Follow the circle:", 500, 160);

    fill('white');
    rect(270, 200, 700, 350, 20);
    
    
    runGame();
}

function runGame() {
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
        if (frameCount % 60 == 0 && timerValue31 > 0) {
            timerValue31--;
        }
        if (timerValue31 == 0) {
            fill('black');
            textSize(70)
            text('GAME OVER', 410, 395);
            //Buttons
            submitButton();
        }
    }
    fill('black');
    text("Timer: " + timerValue31, 70, 320);
    if (!flag3 || timerValue31 == 0) {
        flag3 = false;
        fill('red');
        circle(xpos, ypos, rad);
        fill('black');
        textSize(70)
        text('GAME OVER', 410, 395);
        //Buttons
        submitButton();
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
        if (mouseX > 1000 && mouseX < 1120 && mouseY > 500 && mouseY < 580) {
            storeItem('timerValue31', timerValue31);
            window.location = "./result3.html";
        }
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

