// Data: Daily coffee intake (in cups)
let coffeeIntake = [3, 2, 4, 3, 5, 6, 1];
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function setup() {
  createCanvas(800, 400);
  background(0); // Black background
  noLoop(); // Prevent draw from looping
}

function draw() {
  background(0); // Clear the background
  let margin = 50;
  let chartWidth = width - 2 * margin;
  let chartHeight = height - 2 * margin;
  let barWidth = chartWidth / coffeeIntake.length;

  // Draw title
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text('Daily Coffee Intake', width / 2, margin / 2);

  // Draw axes
  stroke(255);
  line(margin, margin, margin, height - margin); // Y-axis
  line(margin, height - margin, width - margin, height - margin); // X-axis

  // Draw bars
  for (let i = 0; i < coffeeIntake.length; i++) {
    let x = margin + i * barWidth;
    let y = map(coffeeIntake[i], 0, 6, height - margin, margin); // Adjust max value as needed
    let barHeight = height - margin - y;

    // Draw bar with gradient
    for (let j = 0; j < barHeight; j++) {
      let inter = map(j, 0, barHeight, 0, 1);
      let c = lerpColor(color(255, 0, 0), color(0, 0, 255), inter);
      stroke(c);
      line(x, y + j, x + barWidth - 10, y + j);
    }

    // Draw value
    fill(255);
    textSize(12);
    textAlign(CENTER);
    text(coffeeIntake[i], x + (barWidth - 10) / 2, y - 10);

    // Draw day labels
    text(days[i], x + (barWidth - 10) / 2, height - margin + 20);
  }
}
