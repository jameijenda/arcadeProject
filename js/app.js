

let points = 0;



// Following random number generator taken from user "Francisc" at https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

const randomNumber = function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 50;
    this.height = 50;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

     this.x += this.speed * dt;

     if (this.x > ctx.canvas.width) {
        this.x = -100;
        this.speed = randomNumber(50, 500); 
     }   
       
     if (player.x < this.x + this.width &&
         player.x + player.width > this.x &&
         player.y < this.y + this.height &&
         player.height + player.y > this.y){
            
            player.reset();

            points = 0;

            allEnemies.forEach(function(enemy) {
            enemy.reset()
        });
    }
    
};




// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function(){
    this.x = -100;
    this.speed = randomNumber(50, 500); 
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

const Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
};


Player.prototype.update = function(){ 
    if (this.x > ctx.canvas.width - 100){
        this.x -= 100;
    } else if (this.x < 0){
        this.x += 100;
    } else if (this.y > 390){
        this.y -= 85;
    } else if (this.y == -35){
        this.y = 390;
        points++;
    };
};


Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(move){
    if (move === 'up'){
        this.y -= 85;
    }
    else if (move === 'down'){
        this.y += 85;
    } 
    else if (move === 'right'){
        this.x += 100;
    } 
    else if (move === 'left'){
        this.x -= 100;
    }; 
};

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 390;
};



// Now instantiate your objects.
const enemy1 = new Enemy(-100, 225, randomNumber(50, 500));
const enemy2 = new Enemy(-100, 140, randomNumber(50, 500));
const enemy3 = new Enemy(-100, 60, randomNumber(50, 500));



const allEnemies = [enemy1, enemy2, enemy3];


const player = new Player(200, 390);


//<>








// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});