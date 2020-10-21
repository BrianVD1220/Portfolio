/*
	meme version 1
*/

var catImage;

function preload() {
	catImage = loadImage("catZilla.JPG");
}

function setup() {
	createCanvas(640, 650);
}

function draw() {
	background(220);

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
}