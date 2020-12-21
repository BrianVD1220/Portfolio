/* 
	pattern version 2
*/

function setup() {
	createCanvas(640, 360);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {
	background(78, 62, 145);

	//background

	//silhouette
	for (let x = 0; x < width; x += random(100, 200)) {
		let b1 = random(0, 75);
		fill (b1);
		stroke (170);
		let he1 = random(50, 100);
		let he2 = random(75, 100);
		rect(x, he1, he2, 390); //random height 50 - 100 
	}

	//rooftops
	for (let x = -30; x < width; x += random(100, 125)) {
		let b2 = map(x, 0, width, 100, 180);
		fill(b2);
		noStroke();
		rect(x, random(300, 320), 100, 100);
	}

	//clouds
	let y = random(20,30);
	for (let x = 20; x < width; x += random(125, 150)) {

		fill(255);
		noStroke();

		ellipse(x, y, 40);
		ellipse(x - 20, y + 10, 40);
		ellipse(x + 20, y - 5, 40);
		ellipse(x - 10, y - 10, 40);

		y -= random(-10, 10);
	}
}