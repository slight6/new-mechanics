// Initialize player's starting position
let player = {
    "x": 0,
    "y": 0,
    "health": 100,
    "attack": 10,
    "defense": 5
};

// Initialize monsters
let monsters = [
    {
        "name": "Goblin",
        "health": 25,
        "attack": 5,
        "defense": 2,
        "x": Math.floor(Math.random() * 50),
        "y": Math.floor(Math.random() * 50)
    },
    {
        "name": "Orc",
        "health": 50,
        "attack": 10,
        "defense": 5,
        "x": Math.floor(Math.random() * 50),
        "y": Math.floor(Math.random() * 50)
    },
    {
        "name": "Dragon",
        "health": 100,
        "attack": 20,
        "defense": 10,
        "x": Math.floor(Math.random() * 50),
        "y": Math.floor(Math.random() * 50)
    }
];

// Function to move the player
function move(dx, dy) {
    // Check if the new position is within the grid
    if (player.x + dx < 0 || player.x + dx >= 50 || player.y + dy < 0 || player.y + dy >= 50) {
        console.log("Cannot move outside of the grid.");
        return;
    }

    // Move the player
    player.x += dx;
    player.y += dy;

    
    // Check for a monster encounter
    for (let i = 0; i < monsters.length; i++) {
        if (player.x === monsters[i].x && player.y === monsters[i].y) {
            console.log("You have encountered a " + monsters[i].name + "!");
            let damage = monsters[i].attack - player.defense;
            if (damage > 0) {
                player.health -= damage;
                console.log(monsters[i].name + " hit you for " + damage + " damage. Your remaining health: " + player.health);
            } else {
                console.log("You blocked the attack!");
            }
            if (player.health <= 0) {
                console.log("You died.");
                return;
            }
            let playerDamage = player.attack - monsters[i].defense;
            if (playerDamage > 0) {
                monsters[i].health -= playerDamage;
                console.log("You hit " + monsters[i].name + " for " + playerDamage + " damage. " + monsters[i].name + "'s remaining health: " + monsters[i].health);
            } else {
                console.log("Your attack was blocked!");
            }
            if (monsters[i].health <= 0) {
                console.log("You defeated the " + monsters[i].name + "!");
                monsters.splice(i, 1);
                i--;
            }
        }
    }
    console.log("You are now in room [" + player.x + "," + player.y + "].");
}
