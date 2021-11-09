function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

function settings() {
    mainMenuButton();

    pink();
    lightCyan();
    ivory();
    antiqueWhite();
    olive();
    silver();
}

let state = "settings";
let state2 = "hello";

function draw() {
    if (state == "settings") {background(bcolor); settings();}
        /*if (state2 == "pink") {pink();
        }
        else if (state2 == "lightcyan") {lightCyan();}*/
    else {background(255); text("ERROR OCCURRED", 500, 500);}

}

function mousePressed() {
    if (state == "settings") {
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
        if (state2 == "hello"){
            //Pink color settings500, 200, 180, 60
            if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 260) {state2 = "pink"; 
                bcolor='pink';
                storeItem('bcolor', bcolor);
            }
            else if (mouseX > 500 && mouseX < 680 && mouseY > 200 && mouseY < 260) {state2 = "lightcyan";
                bcolor='blue';
                storeItem('bcolor', bcolor);
            }
        }
    }
}