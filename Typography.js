let lightsOn = false;

function setup() {
  createCanvas(800, 200);
  frameRate(5); // Set frame rate for blinking lights
}

function draw() {
  background(255); // Redraw background to clear previous frames
  drawText(); // Draw the text "MARWA"
  if (lightsOn) {
    drawLights(); // Draw blinking lights
  }
  lightsOn = !lightsOn; // Toggle light status
}

// Function to draw the text "MARWA"
function drawText() {
  textSize(80); // Set font size
  textAlign(CENTER, CENTER); // Set text alignment
  fill(0); // Set text color to black
  text("MARWA", width / 2, height / 2); // Display the text "MARWA" at the center of the canvas
}

// Function to draw blinking lights
function drawLights() {
  let lightSize = 20; // Size of the lights
  let spacing = 40; // Spacing between lights

  fill(255, 255, 0); // Set light color to yellow
  // Draw blinking lights
  for (let i = lightSize / 2; i < width; i += spacing) {
    ellipse(i, height / 2, lightSize, lightSize);
  }
}
