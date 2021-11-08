function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

function start1() {
    //Buttons
    mainMenuButton();
    startButton();
    aboutButton();
    settingsButton();
    highScore();
}

let state = "start1";

function draw() {
    if (state == "start1") {start1();}
    else if (state == "about1") {about1();}
    else { background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    if (state == "start1") {
        let d = dist(mouseX, mouseY, 1100, 555);
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
        //Going to game 1 page
        else if (mouseX > 550 && mouseX < 650 && mouseY > 200 && mouseY < 280) {window.location = "./game1.html";}
        //Going to settings page
        else if (d<60) {
            if (d<60) {state = "settings";}
        }
        //Going to about page
        else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about1";}
    }
    
    //About 1 Page
    else if (state == "about1") {
      //Going to main menu page
      if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
      //Going back to game 2 page
      if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {window.location = "./start1.html";}
    }
}