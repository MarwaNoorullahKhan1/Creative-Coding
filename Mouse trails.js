let trail = [];

function setup() {
  createCanvas(800, 600);
  background(0); // Black background
}



function draw() {
  // Move the background slightly towards black to create a fading effect
  background(0, 10);

  // Add the current mouse position to the trail array
  trail.push(createVector(mouseX, mouseY));

  // Limit the length of the trail array to 50
  if (trail.length > 50) {
    trail.splice(0, 1); // Remove the oldest position
  }
  
  

  // Draw the trail with a rainbow color effect
  for (let i = 0; i < trail.length; i++) {
    let hue = map(i, 0, trail.length - 1, 0, 360); // Map the hue based on the position in the trail array
    fill(hue, 255, 255); // Set fill color using HSB color mode
    noStroke(); // No outline for the circles
    ellipse(trail[i].x, trail[i].y, 20, 20); // Draw the circles at the positions stored in the trail array
  }
}
