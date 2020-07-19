let pixels = [];
let space = 32;
let backspace = 8;

function setup() {
	createCanvas(900, 650);
}

function draw() {
	background(75, 72, 74);
	noStroke();
	fill(235, 235, 238);
	if(mouseIsPressed) {
		if(mouseButton == LEFT) {
			pixels.push([mouseX, mouseY]);
		}
	}
	if(keyIsDown(space)) {
		pixels = [];
	} else if(keyIsDown(backspace)) {
		pixels.pop(pixels.length - 1);
	}
	pixels.forEach(pixel => {
		noStroke();
		rect(pixel[0], pixel[1], 10, 10);
	});
}
