/*
	my art
*/

var paint3;

function preload() {
	paint3 = loadImage("paintingOf_threeObjects.JPG");
}

function setup() {
	createCanvas(750, 640);
}

function draw() {
	image(paint3, 0, 0, 750, 640);
}