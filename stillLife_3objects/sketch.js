/*
	my art
*/

var still3;

function preload() {
	still3 = loadImage("stillLife_3objects.JPG");
}

function setup() {
	createCanvas(640, 650);
}

function draw() {
	image(still3, 0, 0, 640, 800);
}