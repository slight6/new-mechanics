// Initialize player's starting credits
let playerCredits = 1000;

// Items and their values
let items = {
  "Water": {
    "price": 50,
    "value": 100
  },
  "Food": {
    "price": 100,
    "value": 200
  },
  "Medicine": {
    "price": 150,
    "value": 300
  },
  "Fuel": {
    "price": 200,
    "value": 400
  },
  "Guns": {
    "price": 250,
    "value": 500
  },
  "Ammo": {
    "price": 300,
    "value": 600
  },
  "Gold": {
    "price": 350,
    "value": 700
  },
  "Diamonds": {
    "price": 400,
    "value": 800
  }
};

// Array to store player's inventory
let playerInventory = [];

// Function to buy an item
function buyItem(item) {
  // Check if the item exists
  if (!items[item]) {
    console.log("Item not found.");
    return;
  }

  // Check if the player has enough credits to buy the item
  if (playerCredits < items[item].price) {
    console.log("You don't have enough credits to buy " + item + ".");
    return;
  }

  // Add item to player's inventory and subtract the cost from their credits
  playerInventory.push(item);
  playerCredits -= items[item].price;
  console.log("Bought " + item + " for " + items[item].price + " credits.");
  console.log("You now have " + playerCredits + " credits remaining and " + playerInventory + " in your inventory.");
}

// Function to sell an item
function sellItem(item) {
  // Check if the item is in player's inventory
  if (!playerInventory.includes(item)) {
    console.log("Item not found in your inventory.");
    return;
  }

  // Remove item from player's inventory and add its value to their credits
  playerInventory.splice(playerInventory.indexOf(item), 1);
  playerCredits += items[item].value;
  console.log("Sold " + item + " for " + items[item].value + " credits.");
  console.log("You now have " + playerCredits + " credits and " + playerInventory + " in your inventory.");
}

// Example usage
buyItem("Water"); // Bought Water for 50 credits. You now have 950 credits remaining and Water in your inventory.
buyItem("Diamonds"); // Bought Diamonds for 400 credits. You now have 550 credits remaining and Water,Diamonds in your inventory.
buyItem("Alien Tech"); // Item not found.
sellItem("Water"); // Sold Water for 100 credits. You now have 650 credits and Diamonds in your inventory.
