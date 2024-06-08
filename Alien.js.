function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    // Alien head
    fill(150, 255, 150); // Light green color for the head
    ellipse(width / 2, height / 2 - 50, 100, 120);
    
    // Alien eyes
    fill(255); // White color for the eyes
    // Left eye
    beginShape();
    vertex(width / 2 - 20, height / 2 - 70);
    bezierVertex(width / 2 - 20, height / 2 - 40, width / 2 - 50, height / 2 - 30, width / 2 - 50, height / 2 - 60);
    bezierVertex(width / 2 - 50, height / 2 - 90, width / 2 - 20, height / 2 - 90, width / 2 - 20, height / 2 - 70);
    endShape(CLOSE);
    
    // Right eye
    beginShape();
    vertex(width / 2 + 20, height / 2 - 70);
    bezierVertex(width / 2 + 20, height / 2 - 40, width / 2 + 50, height / 2 - 30, width / 2 + 50, height / 2 - 60);
    bezierVertex(width / 2 + 50, height / 2 - 90, width / 2 + 20, height / 2 - 90, width / 2 + 20, height / 2 - 70);
    endShape(CLOSE);
    
    // Pupils
    fill(0); // Black color for the pupils
    ellipse(width / 2 - 20, height / 2 - 60, 20, 20); // Left pupil
    ellipse(width / 2 + 20, height / 2 - 60, 20, 20); // Right pupil
    
    // Mouth
    noFill();
    stroke(255); // White color for the mouth
    strokeWeight(2);
    arc(width / 2, height / 2 - 30, 40, 20, 0, PI);
    
    // Arms
    strokeWeight(5);
    stroke(150, 255, 150); // Light green color for the arms
    line(width / 2 - 50, height / 2 + 20, width / 2 - 100, height / 2 + 100); // Left arm
    line(width / 2 + 50, height / 2 + 20, width / 2 + 100, height / 2 + 100); // Right arm
    
    // Legs
    line(width / 2 - 20, height / 2 + 125, width / 2 - 30, height / 2 + 200); // Left leg
    line(width / 2 + 20, height / 2 + 125, width / 2 + 30, height / 2 + 200); // Right leg
}
