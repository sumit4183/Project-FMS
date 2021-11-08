function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

function settings() {
    mainMenuButton();
}

let state = "settings";

function draw() {
    if (state == "settings") {settings()}
    else {background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    if (state == "settings") {
        
    }
}