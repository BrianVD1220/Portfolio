/* 
	pattern version 1
*/

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(78, 62, 145);

	//background

	//silhouette
	for (let x = 0; x < width; x += 100) {
		let b1 = map(x, 0, width, 0, 100);
		fill (b1);
		stroke (170);
		rect(x, height - 270, 100, 280); //random height 50 - 100 
	}

	//rooftops
	for (let x = -30; x < width; x += 100) {
		let b2 = map(x, 0, width, 100, 180);
		fill(b2);
		noStroke();
		rect(x, height - 50, 100, 50);
	}

	//clouds
	let y = 30;
	for (let x = 20; x < width; x += 150) {

		fill(255);
		noStroke();

		ellipse(x, y, 40);
		ellipse(x - 20, y + 10, 40);
		ellipse(x + 20, y - 5, 40);
		ellipse(x - 10, y - 10, 40);

		y -= 10;
	}
}