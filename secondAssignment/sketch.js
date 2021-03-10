/*
	my art
*/

var secAs;

function preload() {
	secAs = loadImage("secondAssignment.JPG");
}

function setup() {
	createCanvas(640, 800);
}

function draw() {
	image(secAs, 0, 0, 640, 800);
}