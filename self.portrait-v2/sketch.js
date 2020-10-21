/*
SelfPortrait_v2
*/

// Global Scope

var x = 344;  //charOrigin
var y = 120;

//sizeVariables

var hairWidth = 130;
var headWidth = hairWidth;
var mouthWidth = 40;
var eyeDiameter = 24;

//colorVariables

var eyeRed = 91;
var eyeBlue = 70;
var eyeGreen = 13;


function setup() {
	createCanvas(680, 340);
}

function draw() {
	background("lightblue");

//hair
	stroke(0);
	fill(0);
	arc(x, y - 20, hairWidth, hairWidth + 10, 1850, 120, PI + QUARTER_PI, CHORD);
//head
	noStroke();
	fill(236, 222, 184);
	ellipse(x, y, headWidth, headWidth + 30);
//mouth
	stroke(243, 208, 234);
	fill(0);
	rect(x - 20, y + 34, mouthWidth, mouthWidth / 2, 10);
//outter left eye
	stroke(0);
	fill(255);
	circle(x - 30, y - 10, eyeDiameter);
//outter right eye
	fill(255);
	circle(x + 30, y - 10, eyeDiameter);
//inner left eye
	fill(eyeRed, eyeBlue, eyeGreen);
	circle(x - 30, y - 10, eyeDiameter - 10);
//inner right eye
	fill(eyeRed, eyeBlue, eyeGreen);
	circle(x + 30, y - 10, eyeDiameter - 10);
//left iris
	fill(0);
	circle(x - 30, y - 10, eyeDiameter - 16);
//right iris
	fill(0);
	circle(x + 30, y - 10, eyeDiameter - 16);
//glasses
	fill(0);
	line(x - 9, y - 25, x - 54, y - 25);
	line(x - 54, y - 25, x - 54, y + 10);
	line(x - 54, y + 10, x - 9, y + 10);
	line(x - 9, y + 10, x - 9, y - 25);
	line(x - 9, y - 5, x + 11, y - 5);
	line(x + 11, y - 25, x + 51, y - 25);
	line(x + 51, y - 25, x + 51, y + 10);
	line(x + 51, y + 10, x + 11, y + 10);
	line(x + 11, y + 10, x + 11, y - 25);
}