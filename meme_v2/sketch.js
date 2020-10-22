/*
	meme version 1
*/

var rotImage;
var conImage;
var catImage;

function preload() {

	rotImage = loadImage("dragonrotZoomed.png");
	conImage = loadImage("contextImage.png");
	catImage = loadImage("catZilla.JPG");

}

function setup() {
	createCanvas(640, 650);
}
a
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

		textSize(20);
		stroke(255);
		strokeWeight(2);
		textFont("impact");
		textAlign(CENTER, CENTER);
		text("Mist Noble", width / 4, height / 2 - 250);

		textSize(20);
		stroke(255);
		strokeWeight(2);
		textFont("impact");
		textAlign(CENTER, CENTER);
		text("Dragon Rot", width - 80, height / 2 - 300);
		} else if (key === "d")  {
			image(conImage, 0, 0, 640, 750);
			
			if ( mouseX > width - 185 && mouseX < width - 15
				&& mouseY > 15 && mouseY < 90) {
				image(rotImage, 0, 0, 640, 650);
			}
		}
	}