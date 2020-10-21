/*
SelfPortrait_v3
*/

// Global Static Scope

var x = 344; //charOrigin
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

bg();

x = mouseX;
y = mouseY;

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

function bg() {
		background(255);
	if (key === "a") {
	background(0, 255, 255);
}	else if (key === "b") {
	background(0, 195, 255);
}	else if (key === "c") {
	background(0, 155, 255);
}	else if (key === "d") {
	background(0, 75, 255);
}	else if (key === "e") {
	background(0, 0, 255);
}	else if (key === "f") {
	background(75, 0, 255);
}	else if (key === "g") {
	background(155, 0, 255);
}	else if (key === "h") {
	background(195, 0, 255);
}	else if (key === "i") {
	background(255, 0, 255);
}	else if (key === "j") {
	background(255, 0, 195);
}	else if (key === "k") {
	background(255, 0, 155);
}	else if (key === "l") {
	background(255, 0, 75);
}	else if (key === "m") {
	background(255, 0, 0);
}	else if (key === "n") {
	background(255, 75, 0);
}	else if (key === "o") {
	background(255, 155, 0);
}	else if (key === "p") {
	background(255, 195, 0);
}	else if (key === "q") {
	background(255, 255, 0);
}	else if (key === "r") {
	background(205, 255, 0);
}	else if (key === "s") {
	background(155, 255, 0);
}	else if (key === "t") {
	background(105, 255, 0);
}	else if (key === "u") {
	background(0, 255, 0);
}	else if (key === "v") {
	background(0, 255, 75);
}	else if (key === "w") {
	background(0, 255, 155);
}	else if (key === "x") {
	background(0, 255, 195);
}	else if (key === "y") {
	background(155, 155, 155);
}	else if (key === "z") {
	background(255, 255, 255);
}
}