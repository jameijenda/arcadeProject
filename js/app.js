/*var oldPosition = Enemy.x;
var distanceTraveled = speed * timeElapsed;
var newPosition = oldPosition +  speed * timeElapsed;*/


// Following random number generator taken from user "Francisc" at https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

var randomNumber = function(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     this.x += this.speed * dt;

     if (this.x > 600) {
        this.x = -100;
        this.speed = randomNumber(50, 500);
};

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};


Player.prototype.update = function(){
  
};


Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(){

};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
var enemy1 = new Enemy(-100, 225, randomNumber(50, 500));
var enemy2 = new Enemy(-100, 140, randomNumber(50, 500));
var enemy3 = new Enemy(-100, 60, randomNumber(50, 500));



var allEnemies = [enemy1, enemy2, enemy3];


var player = new Player(200, 385);





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