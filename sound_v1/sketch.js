/*
	sound sampler mouse
*/

var feather;

function preload() {
	feather = loadSound("feather_junSeba.mp3");
}

function setup() {
	cnv = createCanvas(640, 360);
	cnv.mousePressed(canvasClick);
}

function draw() {
	background(255, 150, 200);

	if (feather.isPlaying()) {
		background(8, 41, 138); 
}

	//visual time
	var currentTime = feather.currentTime();
	var duration = feather.duration();
	var timeElapsed = map(currentTime, 0, duration, 0, width);

	fill(255);
	noStroke();
	rect(0, 300, timeElapsed, 50);

	//volume
	var vol = map(mouseY, 0, height, 1, 0);
	feather.setVolume(vol);

	fill(mouseX, 0, mouseY);
	ellipse(600, mouseY, 20, 20);
}

function canvasClick() {
	if (feather.isPlaying()) {
		feather.pause();
	} else {
		feather.play();
	}
}
