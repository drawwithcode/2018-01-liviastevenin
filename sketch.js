function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	stroke(170);
	smooth();
	angleMode(DEGREES);
}

function draw() {
	background(249, 201, 111);

	//Wheel
	fill (49,54,56);
	strokeWeight(0);
	rect(239, 435, 23,40,20,20,20,20);
	rect(220, 410, 60,15,20,20,20,20);

	fill (220);
	rect(247, 425,7,10);

	//left arm
	strokeWeight(13);
	noFill();
	stroke(155);
	arc(310, 350, 32, 22, 180, 320);

	strokeWeight(13);
	noFill();
	stroke(155);
	arc(328, 366, 35, 25, 295, 366);

	strokeWeight(0);
	fill(49,54,56);
	ellipse(330,350,20);

	//Right arm
	strokeWeight(13);
	noFill();
	stroke(155);
	arc(192, 350, 32, 22, 90, 180);

	strokeWeight(13);
	noFill();
	stroke(155);
	arc(176, 335, 35, 25, 90, 200);

	strokeWeight(0);
	fill(49,54,56);
	ellipse(173,350,20);

	//left hand
	strokeWeight(8);
	noFill();
	stroke(127,255,212);
	arc(160, 315, 20, 20, 0, 180);

	//right hand
	arc(348, 380, 20, 20, 180, 360);

	//Body
	strokeWeight(0);
	fill (127,255,212);
	rect(196, 325, 110,90,20,20,20,20);


	//Body details
	fill (49,54,56);
	rect(210, 340, 80,50,10,10,10,10);
	fill(255);
	rect(215, 345,70,40,10,10,10,10);


	//Antenna top
	fill (49,54,56);
	rect(230, 210, 45, 35,20,20,5,5);

	//Head
	strokeJoin(ROUND);
	fill (127,255,212);
	rect(200, 240, 105, 90,20,20,20,20);


	//Antenna right
	fill (49,54,56);
	rect(305, 255, 20, 45,5,20,20,5);

	//Antenna left
	rect(180, 255, 20, 45,20,5,5,20);
	fill (49,54,56);

	//head string
	rect(200, 306, 105, 20,5,5,20,20);

	//eyes
	fill (0);
	ellipse(230,270,15);
	ellipse(275,270,15);

	//eyes inside
	fill (255);
	ellipse(230,270,8);
	ellipse(275,270,8);

  //mouth
	noFill();
	stroke(0);
	strokeWeight(2);
	arc(252, 280, 25, 22, 0,180);





}
