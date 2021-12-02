let rad = 70;   //Circle radius
let xpos = 620, ypos = 250; //Start position of the circle

//Variables to determine speed and direction of the circle
let xspeed = 1.5;
let yspeed = 1.0;
let xdirection = 1;
let ydirection = 1;

let flag3 = true;   //Variable to determine if the pointer is inside the circle

let timerValue31 = 30;  //Timer value

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
    
    //Function that runs the game
    runGame();
}

function runGame() {

    //Checks condition if the pointer is inside the circle
    if (flag3) {

        //Code for the circle to move in randomm direction
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

        //Running timer
        if (frameCount % 60 == 0 && timerValue31 > 0) {
            timerValue31--;
        }

        //Displaying message when the timer hits 0
        if (timerValue31 == 0) {
            fill('black');
            textSize(70)
            text('GAME OVER', 410, 395);
            //Buttons
            submitButton();
        }
    }

    //Displaying timer
    fill('black');
    text("Timer: " + timerValue31, 70, 320);

    //Dispalying message if the pointer goes outside the circle adn stopping the circle at the current position
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

//Function that checks if the mouse pointer is inside/outside the circle
function mouseMoved() {
    let d3 = dist(mouseX, mouseY, xpos, ypos);
    if (d3 < 35) {
        flag3 = true;
    }
    else {
        flag3 = false;
    }
}

