function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  stroke(255);
  noFill();

  for (let x = 0; x <= mouseX; x += 50) {
    ellipse(x, 200, 50);
  }

  //ellipse(200, 200, 50);
  //ellipse(250, 200, 50);
}
