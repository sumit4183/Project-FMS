function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

var right = 0;
var bcolor = "pink";

function mainMenuButton() {
    fill('lemonChiffon');
    strokeWeight(1);
    rect(20, 20, 100, 70, 20);
    textFont("ABeeZee");
    fill('black');
    textSize(28);
    text("Main", 40, 51);
    textSize(28);
    text("Menu", 38, 75);
}
  
function aboutButton() {
    fill('CornSilk');
    rect(90, 500, 175, 100, 20);
  
    fill('black');
    textSize(32);
    text("About", 135, 560);
}
  
function settingsButton() {
    fill('gray');
    circle(1100, 555, 120, 70);
  
    fill('black');
    textSize(32);
    text("Settings", 1047, 565);
}
  
function startButton() {
    fill('yellow');
    rect(550, 200, 100, 80, 20);
  
    fill('black');
    textSize(28);
    text("Start", 572, 232);
    text("Game", 566, 260);
}
  
function submitButton() {
    fill('SandyBrown');
    rect(1000, 500, 120, 80, 20);
  
    fill('black');
    textSize(32);
    text("Submit", 1015, 549)
}
  
function tryAgainButton() {
    fill('#BBF291');
    rect(535, 500, 120, 80, 20)
    
    fill('black');
    textSize(30);
    text("Try", 575, 535);
    text("Again", 560, 565);
}
  
function highScore() {
    fill('orange');
    rect(509, 370, 180, 80, 20);
  
    fill('black');
    textSize(30);
    text("High Score:", 530, 402);
}
  
function backButton() {
    fill('lemonChiffon');
    strokeWeight(1);
    rect(1080, 20, 100, 70, 20);
    textFont("ABeeZee");
    fill('black');
    textSize(32);
    text("Back", 1097, 64);
}
