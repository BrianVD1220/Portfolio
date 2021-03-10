/*
	my art
*/

var sketch3;

function preload() {
	sketch3 = loadImage("sketchOf_threeObjects.JPG");
}

function setup() {
	createCanvas(750, 640);
}

function draw() {
	image(sketch3, 0, 0, 750, 640);
}