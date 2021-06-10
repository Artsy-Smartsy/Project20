var car1, car2, car3, car4, wall;
var speed, weight;

function setup() {
  createCanvas(1600,800);

  speed1 = random(55, 90)
  speed2 = random(55, 90)
  speed3 = random(55, 90)
  speed4 = random(55, 90)
  weight = random(400, 1500)

  car1 = createSprite(50, 100, 50, 50);
  car2 = createSprite(50, 200, 50, 50);
  car3 = createSprite(50, 300, 50, 50);
  car4 = createSprite(50, 400, 50, 50);
  wall = createSprite(1500, 200, 30, height*2);
  wall.shapeColor = color(80, 80, 80);

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;

}

function draw() {
  background(255,255,255);  

  if(wall.x - car1.x < (car1.width + wall.width)) {
    car1.velocityX = 0
    var deformation = 0.5 * weight * speed1 * speed1 / 22500;
    if(deformation > 180) {
      car1.shapeColor = color(255, 0, 0);
    }

    if(deformation < 180 && deformation > 100) {
      car1.shapeColor = color(230, 230, 0);
    }

    if(deformation < 100) {
      car1.shapeColor = color(0, 255, 0);
    }
  }


  if(wall.x - car2.x < (car2.width + wall.width)) {
    var def2 = 0.5 * weight * speed2 * speed2 / 22500;
    car2.velocityX = 0
    if(def2 > 180) {
      car2.shapeColor = color(255, 0, 0);
    }

    if(def2 < 180 && def2 > 100) {
      car2.shapeColor = color(230, 230, 0);
    }

    if(def2 < 100) {
      car2.shapeColor = color(0, 255, 0);
    }
  }


  if(wall.x - car3.x < (car3.width + wall.width)) {
    var def3 = 0.5 * weight * speed3 * speed3 / 22500;
    car3.velocityX = 0
    if(def3 > 180) {
      car3.shapeColor = color(255, 0, 0);
    }

    if(def3 < 180 && def3 > 100) {
      car3.shapeColor = color(230, 230, 0);
    }

    if(def3 < 100) {
      car3.shapeColor = color(0, 255, 0);
    }
  }


  if(wall.x - car4.x < (car4.width + wall.width)) {
    var def4 = 0.5 * weight * speed4 * speed4 / 22500;
    car4.velocityX = 0
    if(def4 > 180) {
      car4.shapeColor = color(255, 0, 0);
    }

    if(def4 < 180 && def4 > 100) {
      car4.shapeColor = color(230, 230, 0);
    }

    if(def4 < 100) {
      car4.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}