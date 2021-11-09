function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

function settings() {
    mainMenuButton();

    //Pink Background Button
    fill('pink');
    rect(300, 200, 100, 60, 20);
    fill('black');
    textSize(28);
    text("Pink", 323, 240)
}

let state = "settings";

function draw() {
    if (state == "settings") {settings()}
    else {background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    if (state == "settings") {
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
    }
}