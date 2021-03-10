/*
	my art
*/

var firstAs;

function preload() {
	firstAs = loadImage("firstAssignment.JPG");
}

function setup() {
	createCanvas(750, 640);
}

function draw() {
	image(firstAs, 0, 0, 750, 640);
}