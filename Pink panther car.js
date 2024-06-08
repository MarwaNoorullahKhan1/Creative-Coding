function setup() {
    createCanvas(800, 400);
    background(240, 240, 220); // Creamy background
    strokeWeight(2);
}

function draw() {
    background(240, 240, 220); // Creamy background
    drawCityscape();
    drawCar();
    noLoop();
}

function drawCityscape() {
    fill(180, 120, 100); // Earthy color for the cityscape
    noStroke();
    
    // Draw buildings with a vintage texture
    for (let x = 0; x < width; x += 80) {
        let buildingHeight = random(100, 250);
        rect(x, height - buildingHeight, 80, buildingHeight);
        // Add some texture
        fill(180, 100, 80, 50); // Slightly transparent
        for (let y = height - buildingHeight; y < height; y += 10) {
            rect(x, y, 80, 5);
        }
    }
    
    fill(255, 204, 204); // Creamy color for the moon
    ellipse(700, 100, 80, 80); // Moon or sun
}

function drawCar() {
    // Car body with a vintage color
    fill(220, 150, 180); // Soft pink color for the car
    beginShape();
    vertex(100, 300);
    vertex(130, 270);
    vertex(180, 270);
    vertex(210, 240);
    vertex(320, 240);
    vertex(350, 270);
    vertex(520, 270);
    vertex(550, 240);
    vertex(640, 240);
    vertex(670, 270);
    vertex(730, 270);
    vertex(750, 300);
    vertex(100, 300);
    endShape(CLOSE);

    // Vintage-style windows with a slight tint
    fill(120, 150, 180, 150); // Soft blue with transparency
    beginShape();
    vertex(200, 240);
    vertex(300, 240);
    vertex(320, 260);
    vertex(210, 260);
    vertex(200, 240);
    endShape(CLOSE);

    beginShape();
    vertex(340, 240);
    vertex(440, 240);
    vertex(460, 260);
    vertex(320, 260);
    vertex(340, 240);
    endShape(CLOSE);

    beginShape();
    vertex(460, 240);
    vertex(560, 240);
    vertex(540, 260);
    vertex(440, 260);
    vertex(460, 240);
    endShape(CLOSE);

    // Vintage-style wheels with a darker shade
    fill(100); // Dark gray
    ellipse(200, 300, 60, 60);
    ellipse(600, 300, 60, 60);

    // Vintage-style headlights
    fill(255, 220, 0); // Soft yellow
    ellipse(700, 275, 20, 20);
    ellipse(730, 275, 20, 20);

    // Vintage-style additional details (like lines for doors, etc.)
    stroke(80); // Dark gray
    line(100, 270, 750, 270);
    line(350, 240, 350, 270);
    line(520, 240, 520, 270);
}
