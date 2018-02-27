// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    /*this.x = -101;
    this.y = 50;*/
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
     var movement = Enemy.x * dt;   

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function() {
    this.sprite = 'images/char-boy.png';
    /*this.x = 300;
    this.y = 600;*/
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
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

enemy1.x = 50;
enemy1.y = 225;
enemy2.x = 150;
enemy2.y = 140;
enemy3.x = 300;
enemy3.y = 60;


var allEnemies = [enemy1, enemy2, enemy3];

for (var enemy in allEnemies) {
    enemy.sprite;
}


var player = new Player();

player.x = 200;
player.y = 385;
player.sprite;




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