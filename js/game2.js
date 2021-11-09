function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

const colors = ['blue', 'red', 'yellow', 'green', 'purple', 
                'orange', 'black', 'grey', 'white', 'lime'];

var col1, col2;
var i2 = 0;
var timerValue = 2;

function game2() {
    background(bcolor);
  
    //Buttons
    submitButton();
    
    fill('#BBF291');
    rect(270, 30, 700, 60, 20);
    textFont('ABeeZee');
    fill('black');
    textSize(32);
    text("React accordingly to the following images:", 350, 70);
  
    callColor();
  
    fill(col1);
    rect(500, 150, 220, 220, 20);
  
    fill('pink');
    rect(440, 450, 120, 70, 20);
    fill(col1);
    text(col2, 460, 495);
  
    fill('pink');
    rect(640, 450, 120, 70, 20);
    fill(col2);
    text(col1, 660, 495);
  
    fill('black')
    text(floor(timerValue), 200, 200);
    setInterval(timer, 1000);
}

function timer() {
  if (floor(timerValue) > 0) {
    timerValue-=0.01;
  }
}


function callColor() {
    while (i2 == 0) {
      let t1 = Math.floor(Math.random() * 10);
      col1 = colors[t1];
      let t2 = Math.floor(Math.random() * 10)
      col2 = colors[t2];
      i2++;
    }
}

let state = "game2";

function draw() {
  if (state == "game2") {game2();}
  else { background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    //Game 2 Page
    if (state == "game2") {
      //After hitting submit button640, 450, 120, 70, 20
      if (mouseX > 1000 && mouseX < 1120 && mouseY > 500 && mouseY < 580) {window.location = "./result2.html";}
      else if (mouseX > 440 && mouseX < 560 && mouseY > 450 && mouseY < 520) {
        right++;
      } 
      else if (mouseX > 640 && mouseX < 760 && mouseY > 450 && mouseY < 520){
        right++;
      }
    }
}

