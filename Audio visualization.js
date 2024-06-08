let mic, fft, sound;
let stars = [];

function preload() {
  sound = loadSound('Blue Whale Crying.mp3'); // Preload the sound file
}

function setup() {
  createCanvas(800, 600);
  background(0); // Black background
  noStroke();

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);

  sound.loop(); // Play the sound file in a loop
}

function draw() {
  background(0, 50); // Slightly transparent black background for fading effect

  let spectrum = fft.analyze();

  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, 256, height, 0);
    let size = map(amp, 0, 256, 0, 20);

    if (amp > 50) { // Threshold for creating stars
      let star = new Star(random(width), y, size); // Create new star
      stars.push(star); // Add star to array
    }
  }

  // Draw and update stars
  for (let i = stars.length - 1; i >= 0; i--) {
    stars[i].update();
    stars[i].display();
    if (stars[i].isOffScreen()) {
      stars.splice(i, 1); // Remove star if it's off-screen
    }
  }
}

class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.alpha = 255;
    this.speed = random(1, 3); // Random speed for falling stars
  }

  update() {
    this.y += this.speed; // Move star down
    this.alpha -= 5; // Fade out
  }

  display() {
    fill(random(255), random(255), random(255), this.alpha); // Random color with fading effect
    ellipse(this.x, this.y, this.size, this.size); // Draw star
  }

  isOffScreen() {
    return this.y > height || this.alpha <= 0; // Check if the star is off-screen
  }
}
