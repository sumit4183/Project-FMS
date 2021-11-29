function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

let displ3;
let disp3;
let dispsc3;
let j3 = 1;

function result3() {
    
    while (j3 == 1) {
        background(bcolor);
        timerValue31 = getItem('timerValue31');
        totalTime = 60 - timerValue31;
        if (timerValue31 == 60) {
            displ3 = createElement('h1', "Don't worry. You tried");
            displ3.position(445, 200);
        }
        else if (timerValue31 == 0) {
            displ3 = createElement('h1', "Congratulations");
            displ3.position(490, 200);
        }
        else {
            displ3 = createElement('h1', "You did well");
            displ3.position(515, 200);
        }
        console.log(totalTime);
        dispsc3 = "Your surivived for " + totalTime + " seconds";
        disp3 = createElement('h1', dispsc3);
        disp3.position(405, 280);

        j3 = 2;
    }

    //Buttons
    mainMenuButton();
    aboutButton();
    settingsButton();
    tryAgainButton();
}

let state = "result3";

function draw() {
    if (state == "result3") {result3();}
    else if (state == "about3") {about3();}
    else { background(255); text("ERROR OCCURRED", 500, 500);}
}

function mousePressed() {
    if (state == "result3") {
        let d = dist(mouseX, mouseY, 1100, 555);
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {
            j3 = 1; 
            window.location = "./main.html";
        }
        //Going to settings page
        else if (d<60) {
          if (d<60) {
              j3 = 1;
              window.location = "./settings.html";
            }
        }
        //Going to about page
        else if (mouseX > 90 && mouseY > 500 && mouseX < 265 && mouseY < 600) {
            j3 = 1; 
            state = "about3";
            displ2.remove();disp2.remove();
        }
        //Going to game 2 page again
        else if (mouseX > 535 && mouseX < 655 && mouseY >500 && mouseY < 580) {
            j3 = 1;
            window.location = "./start3.html";
        }
    }
    
    else if (state == "about3") {
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
        //Going back to game 2 page
        if (mouseX > 1080 && mouseX < 1180 && mouseY > 20 & mouseY < 90) {window.location = "./start3.html";}
      
    }
}