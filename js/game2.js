
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

const colors = ['blue', 'red', 'yellow', 'green', 'purple', 
                'orange', 'black', 'grey', 'white', 'lime'];

var firstColorChange = false;;
var col1, col2;
var i2 = 0, j2 = 0;
var timerValue = 2, timerValue2 = 1100;
var counter = 0;
var score2 = 0;
var flag2 = true;

function game2() {
  //background(bcolor);
    background(bcolor);
  
    //Buttons
    
    
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
    fill(col2);
    text(col1, 460, 495);
  
    fill('pink');
    rect(640, 450, 120, 70, 20);
    fill(col1);
    text(col2, 660, 495);
    
    console.log(score2);
    //console.log("hello");
    //console.log(i2);

    fill('black')
    text(floor(timerValue), 200, 200);
    setInterval(timer, 1000);
    setInterval(timer2, 1000);
    console.log(timerValue2);
    
    

    if ((i2 == 0 || i2 == 1 || i2 == 2 || i2 == 3 || i2 == 4 || i2 == 5) && score2 == 0) {
      score2 = 0;
      text(score2, 600, 400);
    }
    else if ((i2 == 0 || i2 == 1 || i2 == 2 || i2 == 3 || i2 == 4 || i2 == 5) && score2 == 1) {
      score2 = 1;
      text(score2, 600, 400);
    }
    else if ((i2 == 0 || i2 == 1 || i2 == 2 || i2 == 3 || i2 == 4 || i2 == 5) && score2 == 2) {
      score2 = 2;
      text(score2, 600, 400);
    }
    else if ((i2 == 0 || i2 == 1 || i2 == 2 || i2 == 3 || i2 == 4 || i2 == 5) && score2 == 3) {
      score2 = 3;
      text(score2, 600, 400);
    }
    else if ((i2 == 0 || i2 == 1 || i2 == 2 || i2 == 3 || i2 == 4 || i2 == 5) && score2 == 4) {
      score2 = 4;
      text(score2, 600, 400);
    }
    else if ((i2 == 0 || i2 == 1 || i2 == 2 || i2 == 3 || i2 == 4 || i2 == 5) && score2 == 5) {
      score2 = 5;
      text(score2, 600, 400);
    }
    else if (score2 > 5 && i2 ==  5) {
      score2 = 5;
      text(score2, 600, 400);
    }

    if (timerValue2 == 0) {
      window.location = "./result2.html";
    }
  }

function timer() {
  if (floor(timerValue) > 0) {
    timerValue-=0.01;
  }
}

function timer2() {
  if (floor(timerValue2) > 0) {
    timerValue2-=1;
  }
}


function callColor() {
  if(firstColorChange == false){
    firstColorChange = true;
    if (i2 < 5 ) {
      let t1 = Math.floor(Math.random() * 10);
      col1 = colors[t1];
      let t2 = Math.floor(Math.random() * 10)
      col2 = colors[t2];
      i2++;
    }
  } else if( floor(timerValue) == 0 ){
      flag2 = true;
      if (i2 < 5 ) {
        timerValue = 3;
        let t1 = Math.floor(Math.random() * 10);
        col1 = colors[t1];
        let t2 = Math.floor(Math.random() * 10)
        col2 = colors[t2];
        i2++; 
      }
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
      //After hitting submit button
      if (mouseX > 1000 && mouseX < 1120 && mouseY > 500 && mouseY < 580) {window.location = "./result2.html";}
      if (timerValue > 0 && i2 < 5) {
        if (mouseX > 440 && mouseX < 560 && mouseY > 450 && mouseY < 520 && flag2) {
          score2++;
          storeItem('score2', score2);
          flag2 = false;
        }
      }
    }
}

