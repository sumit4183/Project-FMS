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
    text("The user will be prompted to type a sentence matching", 300, 240);
    text("the one given to them. If they match the sentence well enough,", 300, 290);
    text("they will get a higher score. Make sure to add spaces where needed.", 300, 340);
    text("Score will be calculated based on how many words the user has typed", 300, 390);
    text("correct and will be displayed after hitting the submit button. ", 300, 440);
  }
  
  //Function that displays about page of game 2
  function about2() {
    background(bcolor);
    //main menu button
    mainMenuButton();
    backButton();
  
    fill('white');
    rect(170, 150, 860, 370, 20);
  
    fill('black');
    textSize(25);
    text("A color will be displayed on the screen and two words will display underneath.", 190, 190);
    text("The user has to choose the word of the color (if the color blue is displayed, choose", 190, 240);
    text("the word blue). The game will run 5 times with a 2 second timer running ", 190, 290);
    text("simultaneously each time and when the timer hits 0 it will display another color.", 190, 340);
    text("You can also see your score on the screen. After five chances you will ", 190, 390);
    text("automatically be directed to the result page. You can also end the game by clicking", 190, 440);
    text("on the submit button. The timers speed will increase every chance. ", 190, 490);
  }
  
  //Function that displays about page of game 3
  function about3() {
    background(bcolor);
    //main menu button
    mainMenuButton();
    backButton();
  
    fill('white');
    rect(170, 150, 860, 370, 20);
  
    fill('black');
    textSize(25);
    text("The user will be prompted to put the cursor inside the circle on their screen. The ", 185, 190);
    text("circle will begin to move as soon as they hit the start game button. The user needs", 185, 240);
    text("to keep the cursor inside the circle in order to keep the game running. The result", 185, 290);
    text("will be displayed after hitting the submit button in terms of how many seconds they", 185, 340);
    text("survived. If the cursor goes outside the circle or the timer hits 0, game will be over.", 185, 390);
    text("When you click on start game button, the cursor will already be in the circle, the", 185, 440);
    text("user need to keep it in the circle. A timer of 30 second will be display on the screen.", 185, 490);
  }