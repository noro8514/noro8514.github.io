const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight - 50;

document.addEventListener("keydown",keyCheck,false);
document.addEventListener("keydown",keyCheckProjectile,false);

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }


class Player {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      update(Xvel,Yvel) {
        if ((this.x + this.size) >= width) {
          this.x -= 10;
          this.x += this.velX;
          this.y += Yvel;
        }
      
        else if ((this.x - this.size) <= 0) {
          this.x += 10;
          this.x += this.velX;
          this.y += Yvel;
        }
      
        if ((this.y + this.size) >= height) {
          this.y -= 5;
          this.x += Xvel;
        this.y += this.velY;
        }
        else if ((this.y - this.size) <= 0) {
          this.y += 5;
          this.x += Xvel;
        this.y += this.velY;
        }
        else{
            this.x += Xvel;
            this.y += Yvel;
        }
      
      }

      collisionDetect() {
        
          if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
          }
        
    }

    givePositionX(){
        return this.x;
    }
    givePositionY(){
        return this.y;
    }
      
  }

  class Enemy {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
      this.deathCheck;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      update(pX, pY) {
        //Determining which way closes the gap to the player
        if(pX > this.x){
            this.velX = 5;
        }
        if(pX < this.x){
            this.velX = -5;
        }
        if(pY > this.y){
            this.velY = 5;
        }
        if(pY < this.y){
            this.velY = -5;
        }
        if(this.deathCheck == true){
            this.velX = 0;
            this.velY = 0;
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }

      collisionDetect(pX,pY) {
        
        
            const dx = this.x - pX;
            const dy = this.y - pY;
            const distance = Math.sqrt(dx * dx + dy * dy);
      
            if (distance < this.size + player.size) {
              player.color = 'rgba(0,0,0,0)';
            }  
            for(let i = 0; i<projectileCount; i++){
                const dx2 = this.x - projectileArray[i].x;
                const dy2 = this.y - projectileArray[i].y;
                const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    if (distance2 < this.size + projectileArray[i].size) {
                        this.color = 'rgba(0,0,0,0)';
                        this.x = -30;
                        this.y = -30;
                        this.velX = 0;
                        this.velY = 0;
                        this.deathCheck = true;
    
                        projectileArray[i].color = 'rgba(0,0,0,0)';
                        projectileArray[i].x = 0;
                        projectileArray[i].y = 0;
                        projectileArray[i].velX = 0;
                        projectileArray[i].velY = 0;
                        projectileArray[i].deathCheck = true;

                      }
                  }    
    }
      
  }

  class Projectile {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
      this.deathCheck;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      update() {
        if ((this.x + this.size) >= width) {
        this.color = 'rgba(0,0,0,0)';
        }
      
        if ((this.x - this.size) <= 0) {
        this.color = 'rgba(0,0,0,0)';
        }
      
        if ((this.y + this.size) >= height) {
        this.color = 'rgba(0,0,0,0)';
        }
      
        if ((this.y - this.size) <= 0) {
        this.color = 'rgba(0,0,0,0)';
        }
      
        this.x += this.velX;
        this.y += this.velY;
      }

      collisionDetect() {
        
    }

    givePositionX(){
        return this.x;
    }
    givePositionY(){
        return this.y;
    }
      
  }

  let projectileArray = [];
  let projectileCount = 0;
  let enemyArray = [];
  let difficulty = 10;
  let xVel = 0;
  let yVel = 0;

  const player = new Player(width/2,height/2,xVel,yVel,'rgb(255,0,0)',10);

  for(let i = 0; i < difficulty; i++){
    let randomPosition = random(1,4);

    if(randomPosition == 1){
    enemyArray[i] = new Enemy(random(0, width/4),random(0, height/4),0,0,'rgb(0,125,125)',random(5,10));}

    else if(randomPosition == 2){
    enemyArray[i] = new Enemy(random(width-(width/4), width),random(0, height/4),0,0,'rgb(0,125,125)',random(5,10));}

    else if(randomPosition == 3){
    enemyArray[i] = new Enemy(random(width-(width/4), width),random(height-(height/4), height),0,0,'rgb(0,125,125)',random(5,10));}

    else{
    enemyArray[i] = new Enemy(random(0, width/4),random(height-(height/4), height),0,0,'rgb(0,125,125)',random(5,10));}

  }


  function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
  
      player.draw();
      player.update(xVel,yVel);
      for(let i = 0; i < difficulty; i++){
        enemyArray[i].draw();
        enemyArray[i].update(player.givePositionX(),player.givePositionY());
        enemyArray[i].collisionDetect(player.givePositionX(),player.givePositionY());
      }
      if(projectileCount > 0){
      for(let i = 0; i<projectileCount; i++){
        projectileArray[i].draw();
        projectileArray[i].update();
      }
    }
      //player.collisionDetect();
      //yVel = 0;
      //xVel = 0;

  
    requestAnimationFrame(loop);
  }

  function keyCheck(evt){
    //S Press
    if(evt.keyCode == "83"){
    yVel = 10;
    xVel = 0;
    }
    //A Press
    if(evt.keyCode == "65"){
    xVel = -10;
    yVel = 0;
        }
    //W Press
    if(evt.keyCode == "87"){
    yVel = -10;
    xVel = 0;
        }
    //D Press
    if(evt.keyCode == "68"){
    xVel = 10;
    yVel = 0;
        }
    //Space Press
    if(evt.keyCode == "32"){
    xVel = 0;
    yVel = 0;
    }
    }

    function keyCheckProjectile(evt){
        //Down Press
        if(evt.keyCode == "40"){
        projectileArray[projectileCount] = new Projectile(player.givePositionX(),player.givePositionY(),0,15,'rgb(0,255,0)',4);
        projectileCount += 1;
        }
        //Left Press
        if(evt.keyCode == "37"){
        projectileArray[projectileCount] = new Projectile(player.givePositionX(),player.givePositionY(),-15,0,'rgb(0,255,0)',4);
        projectileCount += 1;
        }
        //Up Press
        if(evt.keyCode == "38"){
        projectileArray[projectileCount] = new Projectile(player.givePositionX(),player.givePositionY(),0,-15,'rgb(0,255,0)',4);
        projectileCount += 1;
        }
        //Right Press
        if(evt.keyCode == "39"){
        projectileArray[projectileCount] = new Projectile(player.givePositionX(),player.givePositionY(),15,0,'rgb(0,255,0)',4);
        projectileCount += 1;
        }
        }

function abs(num){
if(num <= 0){
num = num * -1;
}
return num;
}

function sqrd(num){
    num = num * num;
}

loop();