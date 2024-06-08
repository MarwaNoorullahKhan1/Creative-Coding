// Number of rows and columns in the grid
let cols = 10;
let rows = 10;

function setup() {
    createCanvas(400, 400);
    noFill();
    strokeWeight(2);
}

function draw() {
    background(0);

    // Loop through each row and column
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            // Calculate the position of the center of the circle
            let posX = x * (width / cols) + (width / cols) / 2;
            let posY = y * (height / rows) + (height / rows) / 2;

            // Map colors based on position
            let r = map(x, 0, cols, 50, 255);
            let g = map(y, 0, rows, 50, 255);
            let b = 200;

            // Calculate size of the circles
            let circleSize = map(sin(frameCount * 0.05), -1, 1, 0, width / cols);

            // Set stroke color
            stroke(r, g, b);

            // Draw overlapping circles with slight movement
            drawOverlappingCircles(posX, posY, circleSize);
        }
    }
}

// Function to draw overlapping circles
function drawOverlappingCircles(x, y, size) {
    for (let i = size; i > 0; i -= 10) {
        ellipse(x, y, i, i);
    }
}
