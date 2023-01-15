// Initialize player's starting credits
let playerCredits = 1000;

// Army units and their costs
let units = {
  "Soldier": {
    "price": 100,
    "count": 0
  },
  "Tank": {
    "price": 500,
    "count": 0
  },
  "Aircraft": {
    "price": 1000,
    "count": 0
  },
};

// Function to buy an army unit
function buyUnit(unit) {
  // Check if the unit exists
  if (!units[unit]) {
    console.log("Unit not found.");
    return;
  }

  // Check if the player has enough credits to buy the unit
  if (playerCredits < units[unit].price) {
    console.log("You don't have enough credits to buy " + unit + ".");
    return;
  }

  // Increment the unit count, subtract the cost from the player's credits
  units[unit].count++;
  playerCredits -= units[unit].price;
  console.log("Bought " + unit + " for " + units[unit].price + " credits.");
  console.log("You now have " + playerCredits + " credits remaining and " + units[unit].count + " " + unit+"s in your army.");
}

// Example usage
buyUnit("Soldier"); // Bought Soldier for 100 credits. You now have 900 credits remaining and 1 Soldiers in your army.
buyUnit("Tank"); // Bought Tank for 500 credits. You now have 400 credits remaining and 1 Tanks in your army.
buyUnit("Alien Unit"); // Unit not found.
