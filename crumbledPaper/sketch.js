/*
	my art
*/

var crumb;

function preload() {
	crumb = loadImage("crumbledPaper.JPG");
}

function setup() {
	createCanvas(750, 640);
}

function draw() {
	image(crumb, 0, 0, 750, 640);
}