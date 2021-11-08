function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

function mainMenu() {
    //Buttons
    settingsButton();
    aboutButton();
    
    //Heading
    fill('gray');
    strokeWeight(1);
    rect(50, 50, 1180, 70, 20);
    fill('black');
    textFont("ABeeZee");
    textSize(32);
    text("FMS Development", 500, 95);
  
    //Games button
    fill('yellow');
    rect(50, 150, 300, 200, 20);
    fill('yellow');
    rect(490, 150, 300, 200, 20);
    fill('yellow');
    rect(930, 150, 300, 200, 20);
  
    textSize(50);
    fill('black');
    text("Typing", 130, 265);
    text("React", 580, 265);
    text("Trace", 1020, 265);
  }

  function about() {
    background(bcolor);

    //main menu button
    mainMenuButton();
  
    fill('white');
    rect(270, 200, 760, 270, 20);
  
    fill('black');
    textSize(25);
    text("Credit to Jake Swartzmiller, Sumit Patel, and Faysel Bekri", 300, 300);
    text("FSE100-93750, Group #8", 300, 350);
    text("Project FMS: Gaming", 300, 400);
}

let state = "menu";

function draw() {
  if (state == "menu") {mainMenu();}
  else if (state == "about") {about();}
  else {background(255); text("ERROR OCCURRED", 500, 500);}
  }

function mousePressed() {
    let d = dist(mouseX, mouseY, 1100, 555);
    //Going to Game#1 start page
    if (mouseX > 50 && mouseX < 350 && mouseY > 150 && mouseY < 350) {window.location = "./start1.html";}
    //Going to Game#2 start page
    else if (mouseX > 490 && mouseX < 790 && mouseY > 150 && mouseY < 350) {window.location = "./start2.html";}
    //Going to Game#3 page
    else if (mouseX > 930 && mouseX < 1230 && mouseY > 150 && mouseY < 350) {window.location = "./start3.html";}
    //Going to settings page
    else if (d<60) {
      if (d<60) {window.location = "./settings.html";}
    }
    //Going to login page
    else if (mouseX > 535 && mouseX < 710 && mouseY > 450 && mouseY < 550) {window.location = "./login.html";}
    //Going to about page
    else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {state = "about"}
    else if (state == "about") {
      //Going to main menu page
      if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
    }
}