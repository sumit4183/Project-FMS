function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

//Functions to draw contents on start page of game 2
function start2() {
    //Buttons
    mainMenuButton();
    startButton();
    aboutButton();
    settingsButton();
}

let state = "start2";

function draw() {
    if (state == "start2") {start2();}
    else if (state == "about2") {about2();}
    else { background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    //If you are on game 2 page
    if (state == "start2") {
        let d = dist(mouseX, mouseY, 1100, 555);
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
        //Going to game 2 page
        else if (mouseX > 550 && mouseX < 650 && mouseY > 200 && mouseY < 280) {
            score2 = 0;
            storeItem('score2', score2);
            window.location = "./game2.html";
        }
        //Going to settings page
        else if (d<60) {
            if (d<60) {window.location = "./settings.html";}
        }
        //Going to about page
        else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about2";}
    }
    
    //About 2 Page
    else if (state == "about2") {
      //Going to main menu page
      if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
      //Going back to game 2 page
      if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {window.location = "./start2.html";}
    }
}