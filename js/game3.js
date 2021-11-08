function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
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
    text("Trace the following image:", 440, 160);
  
    fill('#BBF291');
    rect(500, 240, 220, 220, 20);
    textFont('ABeeZee');
    fill('black');
    textSize(32);
    text("(Image", 550, 330);
    text("PlaceHolder)", 530, 370);
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