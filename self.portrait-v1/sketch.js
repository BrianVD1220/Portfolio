/*
SelfPortrait_v1
*/

function setup() {
	createCanvas(680, 340);
}

function draw() {
	background('lightblue')

//hair
	stroke(0)
	fill(0)
	arc(344, 100, 130, 140, 1850, 120, PI + QUARTER_PI, CHORD)	
//head
	noStroke()
	fill(236, 222, 184)
	ellipse(344, 120, 130, 160)
//mouth
	stroke(243, 208, 234)
	fill(0)
	rect(324, 154, 40, 20, 10)
//outter left eye
	stroke(0)
	fill(255)
	circle(314, 110, 24)
//outter right eye
	fill(255)
	circle(374, 110, 24)
//inner left eye
	fill(91, 70, 13)
	circle(314, 110, 14)
//inner right eye
	fill(91, 70, 13)
	circle(374, 110, 14)
//left iris
	fill(0)
	circle(314, 110, 8)
//right iris
	fill(0)
	circle(374, 110, 8)
}