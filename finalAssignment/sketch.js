/*
	my art
*/

var finalAs;

function preload() {
	finalAs = loadImage("finalAssignment.JPG");
}

function setup() {
	createCanvas(750, 640);
}

function draw() {
	image(finalAs, 0, 0, 750, 640);
}