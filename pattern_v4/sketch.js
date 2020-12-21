/* 
	pattern version 4
*/

function setup() {
	createCanvas(600, 400);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern() {

	let r = random(205, 255);
	let g = random(205, 255);
	let b = random(205, 255);

	background(r, g, b);

	let w = 50;
	let h = 50;
	
	for (let x = 20; x <= width; x += 25) {
		for (let y = 20; y <= height; y += 25) {

			let r = random(55, 155);
			let g = random(155, 255);
			let b = random(55, 155);

			noStroke();
			fill(r, g, b);
			rect(x, y, w - 38, h - 38);
		
		}
	}

	for (let x = 0; x <= width; x += 50) {
		for (let y = 0; y <= height; y += 50) {

			let r = random(155, 255);
			let g = random(55, 155);
			let b = random(55, 155);

			noStroke();
			fill(r, g, b);
			ellipse(x, y, w, h);

		}
	}

	for (let x = 0; x <= width; x += 50) {
		for (let y = 0; y <= height; y += 50) {

			let r = random(55, 155);
			let g = random(55, 155);
			let b = random(155, 255);

			stroke(r, g, b);
			strokeWeight(20);
			noFill();
			ellipse(x, y, w - 25, h - 25);
		
		}
	}
}