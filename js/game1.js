function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

var input;
var h5;
var sen;
var countCorrect;
var disp1;
var game1Per;
var dispsc1;
var i1 = j1 = k1 = n1 = 1;
const sentences = ["Fish and visitors stink after three days", 
  "My wallet is like an onion, opening it makes me cry", 
  "Friends buy you food. Best friends eat your food", 
  "My windows aren't dirty, my dog is painting", 
  "Every day is a gift, that's why they call it a present", 
  "I love my job only when I am on vacation",
  "Don't give up your dreams so soon, sleep longer", 
  "I'm not lazy, I'm on power saving mode",
  "If you can’t beat them, arrange to have them beaten",
  "He who wakes up early, yawns all day long"];

function game1() {
    background(bcolor);
  
    //Button
    submitButton();
  
    fill('#BBF291');
    rect(270, 120, 700, 60, 20);
    textFont('ABeeZee');
    fill('black');
    textSize(32);
    text("Type the following sentence:", 440, 160);
  
    callsen();
    callin();
}
  
function callsen() {
    while (i1 == 1) {
      let t = Math.floor(Math.random() * 10);
      sen = sentences[t];
      h5 = createElement('h2', sen);
      h5.position(360, 250);
      i1 = 2;
    }
}
  
function callin() {
    while (j1 == 1) {
      input = createInput('');
      input.position(390, 380);
      input.style('color','black');
      input.size(400, 20);
      j1 = 2;
    } 
}
  
function dispScore1() {
    while (k1 == 1) {
      countCorrect = 0;
      game1Per = 0;
      const string = input.value();
      var l = 0;
      var m = 0;
  
      var senList1 = sen.split(" ");
      var sentList1 = sen.split(" ");
      var inpList1 = string.split(" ");
      for (l = 0; l < inpList1.length; l++) {
        for (m = 0; m < senList1.length; m++) {
          if (inpList1[l] == senList1[m]) {
            inpList1.splice(l,1);
            countCorrect++;
          }
        }
      }
      game1Per = Number(((countCorrect / sentList1.length) * 100).toFixed(2));
      while (n1 == 1) {
        if (game1Per == 100) {
          displ1 = createElement('h1', "Congratulations");
          displ1.position(495, 200);
        }
        else if (game1Per == 0) {
          displ1 = createElement('h1', "Don't worry. You tried");
          displ1.position(455, 200);
        }
        else {
          displ1 = createElement('h1', "You did well");
          displ1.position(515, 200);
        }
        n1 = 2;
      }
      game1Per.toString();
      dispsc1 = "Your score: " + game1Per;
      disp1 = createElement('h2', dispsc1);
      disp1.position(525, 280);
      k1 = 2;
    }
}

function about1() {
  background(bcolor);
  //main menu button
  mainMenuButton();
  backButton();

  fill('white');
  rect(270, 200, 760, 270, 20);

  fill('black');
  textSize(25);
  text("The user will be prompted to type a sentence matching", 300, 300);
  text("the one given to them. If they match the sentence well enough,", 300, 350);
  text("they will get a higher score. Make sure to add spaces where needed.", 300, 400);
}

function result1() {
    background(bcolor);

    //Buttons
    mainMenuButton();
    aboutButton();
    settingsButton();
    tryAgainButton();
    dispScore1();
} 

let state = "game1";

function draw() {
    if (state == "game1") {game1();}
    else if (state == "about1") {about1();}
    else if (state == "result1") {result1();}
    else { background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    if (state == "game1") {
        //After hitting submit button
        if (mouseX > 1000 && mouseX < 1120 && mouseY > 500 && mouseY < 580) {
            i1=1;j1=1;
            state = "result1";
            h5.remove();input.remove();
        }
    }

    //About 1 Page
    else if (state == "about1") {
      //Going to main menu page
      if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
      //Going back to game 1 page
      if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {window.location = "./start1.html";}
    }
    
    //Game 1 result
    else if (state == "result1") {
        let d = dist(mouseX, mouseY, 1100, 555);
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {
            n1=1;k1=1;
            window.location = "./main.html";
            disp1.remove();displ1.remove();
        }
        //Going to settings page
        else if (d<60) {
          if (d<60) {
              n1=1;k1=1;
              window.location = "./settings.html";
              disp1.remove();displ1.remove();}
        }
        //Going to about page
        else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {
            n1=1;k1=1;
            state = "about1";
            disp1.remove();displ1.remove();
        }
        //Going to game 1 page again
        else if (mouseX > 535 && mouseX < 655 && mouseY >500 && mouseY < 580) {
            n1=1;k1=1;
            state = "game1";
            disp1.remove();displ1.remove();
        }
    }
}