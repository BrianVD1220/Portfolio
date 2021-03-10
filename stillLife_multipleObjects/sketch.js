/*
	my art
*/

var stillMulti;

function preload() {
	stillMulti = loadImage("stillLife_multipleObjects.JPG");
}

function setup() {
	createCanvas(640, 650);
}

function draw() {
	image(stillMulti, 0, 0, 640, 800);
}