// Here's a simple yet complete game in JavaScript: **Space Invaders**

// **Game Overview**
// The game is set in space where alien spaceships are invading Earth. The player controls a spaceship that can move left and right, and its goal is to
// destroy the invading aliens by shooting them with bullets.

// **Game Code**
// ```javascript

// Game variables
let score = 0;
let lives = 3;

// Initialize game elements
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playerShip = {
    x: 50,
    y: 250,
    width: 20,
    height: 20,
};
const bulletPool = [];
const alienPool = [];
const invader = {
    x: Math.random() * (canvas.width - 20),
    y: Math.random() * (canvas.height - 20),
    width: 10,
    height: 10,
};

// Game loop
setInterval(() => {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player ship
    ctx.fillStyle = 'green';
    ctx.fillRect(playerShip.x, playerShip.y, playerShip.width, playerShip.height);

    // Update and draw bullets
    for (let i = 0; i < bulletPool.length; i++) {
        const bullet = bulletPool[i];
        bullet.y -= 5;
        if (bullet.y < 0) {
            bulletPool.splice(i, 1);
        } else {
            ctx.fillStyle = 'red';
            ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        }
    }

    // Update and draw aliens
    for (let i = 0; i < alienPool.length; i++) {
        const alien = alienPool[i];
        alien.y += 2;
        if (alien.y > canvas.height) {
            alienPool.splice(i, 1);
        } else {
            ctx.fillStyle = 'orange';
            ctx.fillRect(alien.x, alien.y, alien.width, alien.height);
        }
    }

    // Check for collisions
    for (let i = 0; i < bulletPool.length; i++) {
        const bullet = bulletPool[i];
        for (let j = 0; j < alienPool.length; j++) {
            const alien = alienPool[j];
            if ((bullet.x <= alien.x + alien.width &&
                bullet.x + bullet.width >= alien.x &&
                bullet.y <= alien.y + alien.height &&
                bullet.y + bullet.height >= alien.y)) {
                bulletPool.splice(i, 1);
                alienPool.splice(j, 1);
                score++;
            }
        }
    }

    // Check for collisions with player ship
    for (let i = 0; i < alienPool.length; i++) {
        const alien = alienPool[i];
        if ((playerShip.x <= alien.x + alien.width &&
            playerShip.x + playerShip.width >= alien.x &&
            playerShip.y <= alien.y + alien.height &&
            playerShip.y + playerShip.height >= alien.y)) {
            lives--;
            alienPool.splice(i, 1);
        }
    }

    // Game over?
    if (lives === 0) {
        ctx.fillStyle = 'white';
        ctx.font = '30px Arial';
        // ctx.textAlign
    }

});