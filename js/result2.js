function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

function result2() {
    background(bcolor);

    //Buttons
    mainMenuButton();
    aboutButton();
    settingsButton();
    tryAgainButton();
} 

let state = "result2";

function draw() {
    if (state == "result2") {result2();}
    else if (state == "about2") {about2();}
    else { background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    if (state == "result2") {
        let d = dist(mouseX, mouseY, 1100, 555);
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
        //Going to settings page
        else if (d<60) {
          if (d<60) {window.location = "./settings.html";}
        }
        //Going to about page
        else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about2";}
        //Going to game 2 page again
        else if (mouseX > 535 && mouseX < 655 && mouseY >500 && mouseY < 580) {window.location = "./start2.html";}
    }
    
    else if (state == "about2") {
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
        //Going back to game 2 page
        if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {window.location = "./start2.html";}
      
    }
}
