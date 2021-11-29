//Function that about page of the project
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
  
  //Function displays about page of game 1
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
  
  //Function that displays about page of game 2
  function about2() {
    background(bcolor);
    //main menu button
    mainMenuButton();
    backButton();
  
    fill('white');
    rect(270, 200, 760, 270, 20);
  
    fill('black');
    textSize(25);
    text("A color will be displayed on the screen and two words will display", 300, 300);
    text("underneath. The user has to choose the word of the color (if", 300, 350);
    text("the color blue is displayed, choose the word blue).", 300, 400);
  }
  
  //Function that displays about page of game 3
  function about3() {
    background(bcolor);
    //main menu button
    mainMenuButton();
    backButton();
  
    fill('white');
    rect(270, 200, 760, 270, 20);
  
    fill('black');
    textSize(26);
    text("The user will be prompted to put the cursor inside the center", 300, 250);
    text("circle on their screen. The circle will then begin to move while", 300, 310);
    text("the user tries to keep the mouse inside. The longer they go,", 300, 370);
    text("the higher the score the user will get.", 300, 430);
  }