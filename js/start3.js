function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

function start3() {
    //Buttons
    mainMenuButton();
    startButton();
    aboutButton();
    settingsButton();
}

let state = "start3";

function draw() {
    if (state == "start3") {start3();}
    else if (state == "about3") {about3();}
    else { background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    if (state == "start3") {
        let d = dist(mouseX, mouseY, 1100, 555);
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
        //Going to game 2 page
        else if (mouseX > 550 && mouseX < 650 && mouseY > 200 && mouseY < 280) {window.location = "./game3.html";}
        //Going to settings page
        else if (d<60) {
            if (d<60) {state = "settings";}
        }
        //Going to about page
        else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about3";}
    }
    
    //About 2 Page
    else if (state == "about3") {
      //Going to main menu page
      if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
      //Going back to game 2 page
      if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {window.location = "./start3.html";}
    }
}