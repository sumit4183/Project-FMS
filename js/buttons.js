let bcolor;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    bcolor = getItem('bcolor');
    if(bcolor === null){
        bcolor = "Ivory";
    }
    background(bcolor);
    print(bcolor)
}

var right = 0;
//let bcolor = "Ivory";


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

function pink() {
    fill('pink');
    rect(300, 200, 100, 60, 20);
    fill('black');
    textSize(28);
    text("Pink", 323, 240);
    //bcolor = "pink";
}

function lightCyan() {
    fill('LightCyan');
    rect(500, 200, 180, 60, 20);
    fill('black');
    textSize(28);
    text("Light Cyan", 523, 240);
}

function ivory() {
    fill('Ivory');
    rect(780, 200, 100, 60, 20);
    fill('black');
    textSize(28);
    text("Ivory", 800, 240);
}

function antiqueWhite() {
    fill('AntiqueWhite');
    rect(500, 350, 180, 60, 20);
    fill('black');
    textSize(28);
    text("Antique White", 507, 390);
}

function olive() {
    fill('Olive');
    rect(300, 350, 100, 60, 20);
    fill('black');
    textSize(28);
    text("Olive", 320, 390);
}

function silver() {
    fill('SkyBlue');
    rect(780, 350, 100, 60, 20);
    fill('black');
    textSize(28);
    text("SkyBlue", 800, 390);
}