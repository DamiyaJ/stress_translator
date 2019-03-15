let img; // Declare variable 'img'.


function setup() {
	createCanvas(windowWidth, windowHeight);
	img = loadImage('assets/blush.png'); // Load the image
	var d = day();
	text('Current day: \n' + d, 5, 50);
	var y = year();
	text('Current year: \n' + y, 5, 90);
}

function draw() {
	  image(img, 0, 0);
		image(img, 0, height / 2, img.width / 2, img.height / 2);
}
