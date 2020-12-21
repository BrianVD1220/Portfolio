/*
	meme version 1
*/
var jet1Image;
var jet2Image;
var rotImage;
var conImage;
var catImage;

var jet1Width = 50;
var jet1Height = 50;
var jet1X = 160;
var jet1Y = 75;
var jet1Xspeed = 2;
var jet1Yspeed = .5;

var jet2Width = 50;
var jet2Height = 50;
var jet2X = 560;
var jet2Y = 25;
var jet2Xspeed = 2;
var jet2Yspeed = .5; 

function preload() {

	jet1Image = loadImage("jet1.png");
	jet2Image = loadImage("jet2.png");
	rotImage = loadImage("dragonrotZoomed.png");
	conImage = loadImage("contextImage.png");
	catImage = loadImage("catNo-jet.png");

}

function setup() {
	createCanvas(640, 650);
}

function draw() {

	 if (key === "a") {

		image(catImage, 0, 0, 640, 800);

		textSize(20);
		fill(0);
		stroke(255);
		strokeWeight(2);
		textFont("impact");
		textAlign(CENTER, CENTER);
		text("Brian on Sekiro", width - 200, height / 2);

		textSize(20);
		stroke(255);
		strokeWeight(2);
		textFont("impact");
		textAlign(CENTER, CENTER);
		text("The Bosses", width / 5, height / 2 + 275);
		
		//Jet 1

		image(jet1Image, jet1X, jet1Y, jet1Width, jet1Height);

		textSize(20);
		stroke(255);
		strokeWeight(2);
		textFont("impact");
		textAlign(CENTER, CENTER);
		text("Mist Noble", jet1X, jet1Y);

		jet1X += jet1Xspeed;
		jet1Y += jet1Yspeed;

			if (jet1X > 800 || jet1Y > 810) {
				jet1X = random(-50, 50);
				jet1Y = random(-50, 50);
			}

		//Jet 2

		image(jet2Image, jet2X, jet2Y, jet2Width, jet2Height);

		textSize(20);
		stroke(255);
		strokeWeight(2);
		textFont("impact");
		textAlign(CENTER, CENTER);
		text("Dragon Rot", jet2X, jet2Y);

		jet2X -= jet2Xspeed;
		jet2Y += jet2Yspeed;

			if (jet2X < -100 || jet2Y < -100) {
				jet2X = random(590, 690);
				jet2Y = random(-50, 50);
			}

	} 	
		else if (key === "d")  {

			image(conImage, 0, 0, 640, 750);
			
			if (mouseX > width - 185 && mouseX < width - 15 && mouseY > 15 && mouseY < 90) {

				image(rotImage, 0, 0, 640, 650);
			}
		}
	}