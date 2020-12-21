/* 
	pattern version 3
*/

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(180);

	let w = 50
	let h = 50
	
	for (let x = 20; x <= width; x += 25) {
		for (let y = 20; y <= height; y += 25) {
		rect(x, y, w - 38, h - 38);
		}
	}

	for (let x = 0; x <= width; x += 50) {
		for (let y = 0; y <= height; y += 50) {
		ellipse(x, y, w, h);
		}
	}

	for (let x = 0; x <= width; x += 50) {
		for (let y = 0; y <= height; y += 50) {
		ellipse(x, y, w - 25, h - 25);
		}
	}
}