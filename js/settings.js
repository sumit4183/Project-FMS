function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(bcolor);
}

function settings() {
    mainMenuButton();

    //BackGround Title
    fill('black');
    rect(380, 90, 400, 40, 20);
    fill('white');
    text("Background Options", 462, 117)

    //Buttons for changing colors
    pink();
    lightCyan();
    ivory();
    antiqueWhite();
    olive();
    skyBlue();
}

let state = "settings";
let state2 = "hello";

function draw() {
    if (state == "settings") {background(bcolor); settings();}
    else {background(255); text("ERROR OCCURRED", 500, 500);}

}

function mousePressed() {
    if (state == "settings") {
        //Going to main menu page
        if (mouseX > 20 && mouseX < 110 && mouseY > 20 && mouseY < 90) {window.location = "./main.html";}
        if (state2 == "hello"){
            //Changing background color
            if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 260) {
                bcolor='pink';
                storeItem('bcolor', bcolor);
            }
            else if (mouseX > 500 && mouseX < 680 && mouseY > 200 && mouseY < 260) {
                bcolor='LightCyan';
                storeItem('bcolor', bcolor);
            }
            else if (mouseX > 780 && mouseX < 880 && mouseY > 200 && mouseY < 260) {
                bcolor='Ivory';
                storeItem('bcolor', bcolor);
            }
            else if (mouseX > 300 && mouseX < 400 && mouseY > 350 && mouseY < 410) {
                bcolor='Olive';
                storeItem('bcolor', bcolor);
            }
            else if (mouseX > 500 && mouseX < 680 && mouseY > 350 && mouseY < 410) {
                bcolor='AntiqueWhite';
                storeItem('bcolor', bcolor);
            }
            else if (mouseX > 780 && mouseX < 880 && mouseY > 350 && mouseY < 410) {
                bcolor='SkyBlue';
                storeItem('bcolor', bcolor);
            }
        }
    }
}