

let points = 0;

const tileWidth = 101;
const tileHeight = 83; 



// The following random number generator was taken from user "Francisc" at https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
// It is used later when providing random speeds for our enemies.

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

     //This keeps our enemies from going off-screen.

     if (this.x > ctx.canvas.width) {
        this.x = -100;
        this.speed = randomNumber(50, 500); 
     }   
     

     // Here's our colission check; if the positions match the conditions, the game resets.
     // Pulled from MDN web docs at https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection


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


// The following function keeps our Hero from going off-screen.

Player.prototype.update = function(){ 
    if (this.x > ctx.canvas.width - tileWidth){
        this.x -= tileWidth;
    } else if (this.x < 0){
        this.x += tileWidth;
    } else if (this.y > 390){
        this.y -= tileHeight;
    } else if (this.y == -25){
        this.y = 390;

        // It also updates our 'points' variable when our Hero reaches the water.

        points++;
    };
};


Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(move){
    if (move === 'up'){
        this.y -= tileHeight;
    }
    else if (move === 'down'){
        this.y += tileHeight;
    } 
    else if (move === 'right'){
        this.x += tileWidth;
    } 
    else if (move === 'left'){
        this.x -= tileWidth;
    }; 
};


// Initial position for our Hero.

Player.prototype.reset = function(){
    this.x = 202;
    this.y = 390;
};



// Now instantiate your objects.
const enemy1 = new Enemy(-100, 225, randomNumber(50, 500));
const enemy2 = new Enemy(-100, 140, randomNumber(50, 500));
const enemy3 = new Enemy(-100, 60, randomNumber(50, 500));



// Place all enemy objects in an array called allEnemies

const allEnemies = [enemy1, enemy2, enemy3];


// Place the player object in a variable called player

const player = new Player(202, 390);







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