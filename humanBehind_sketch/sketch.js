/*
	my art
*/

var behind;

function preload() {
	behind = loadImage("humanBehind_sketch.JPG");
}

function setup() {
	createCanvas(640, 900);
}

function draw() {
	image(behind, 0, 0, 640, 900);
}