/*
	sound sampler keyboard
*/

var feather;
var luvSic;
var refEtern;
var fourSeas;
var featherImage;
var luvImage;
var reflectionImage;
var fourImage;

var vol = .99;

function preload() {
	feather = loadSound("feather_junSeba.mp3");
	luvSic = loadSound("luvSic_pt3_junSeba.mp3");
	refEtern = loadSound("reflectionEternal_junSeba.mp3");
	fourSeas = loadSound("songOf_fourSeasons_junSeba.mp3");
	featherImage = loadImage("jun_sebaImage.jpg");
	luvImage = loadImage("luv_sicImage.jpg");
	reflectionImage = loadImage("reflection_eternalImage.jpg");
	fourImage = loadImage("samurai_champloo.png");
}

function setup() {
	createCanvas(640, 360);

	feather.playMode("restart");
	luvSic.playMode("restart");
	refEtern.playMode("restart");
	fourSeas.playMode("restart");
}

function draw() {
	background(255, 150, 200);

	//volume
	if (keyCode === DOWN_ARROW) {
		vol = 0;
	} else if (keyCode === LEFT_ARROW) {
		vol = .33;
	} else if (keyCode === UP_ARROW) {
		vol = .66;
	} else if (keyCode === RIGHT_ARROW) {
		vol = .99;
	}

	feather.setVolume(vol);
	luvSic.setVolume(vol);
	refEtern.setVolume(vol);
	fourSeas.setVolume(vol);

	//background during songs
	if (feather.isPlaying()) {
		background(8, 41, 138); 
		image(featherImage, 0, 0, 640, 360);
	} else if (luvSic.isPlaying()) {
		background(217, 21, 161);
		image(luvImage, 0, 0, 640, 360);
	} else if (refEtern.isPlaying()) {
		background(47, 198, 153);
		image(reflectionImage, 0, 0, 640, 360);
	} else if (fourSeas.isPlaying()) {
		background(220, 164, 12);
		image(fourImage, 0, 0, 640, 360);
	}

	//visual time for feather
	var fea_currentTime = feather.currentTime();
	var fea_duration = feather.duration();
	var fea_timeElapsed = map(fea_currentTime, 0, fea_duration, 0, width);

	fill(255);
	noStroke();
	rect(0, 300, fea_timeElapsed, 50);

	//visual time for luvSic
	var luv_currentTime = luvSic.currentTime();
	var luv_duration = luvSic.duration();
	var luv_timeElapsed = map(luv_currentTime, 0, luv_duration, 0, width);

	fill(255);
	noStroke();
	rect(0, 240, luv_timeElapsed, 50);

	//visual time for refEtern
	var ref_currentTime = refEtern.currentTime();
	var ref_duration = refEtern.duration();
	var ref_timeElapsed = map(ref_currentTime, 0, ref_duration, 0, width);

	fill(255);
	noStroke();
	rect(0, 180, ref_timeElapsed, 50);

	//visual time for refEtern
	var fou_currentTime = fourSeas.currentTime();
	var fou_duration = fourSeas.duration();
	var fou_timeElapsed = map(fou_currentTime, 0, fou_duration, 0, width);

	fill(255);
	noStroke();
	rect(0, 120, fou_timeElapsed, 50);

	//visual for volume

	text("Volume", 300, 15);

	if (vol === .99) {
		text("99%", 310, 50);
	} else if (vol === .66) {
		text("66%", 310, 50);
	} else if (vol === .33) {
		text("33%", 310, 50);
	} else if (vol === 0) {
		text("0%", 310, 50);
	}
}


function keyTyped() {
	if (key === "q") {
		fourSeas.pause();
		luvSic.pause();
		refEtern.pause();
		feather.play();
	}  else if (key === "w") {
		fourSeas.pause();
		feather.pause();
		refEtern.pause();
		luvSic.play();
	} else if (key === "e") {
		fourSeas.pause();
		luvSic.pause();
		feather.pause();
		refEtern.play();
	} else if (key === "r") {
		feather.pause();
		luvSic.pause();
		refEtern.pause();
		fourSeas.play();
	} else if (keyCode === 32) { //space key
		fourSeas.pause();
		luvSic.pause();
		refEtern.pause();
		feather.pause();
	}
	return false;
}