let player = {
    "name": "Player1",
    "credits": 1000,
    "army": {
        "soldiers": 0,
        "tanks": 0,
    },
    "economy": {
        "resources": 0,
        "land": 0
    }
};

let resourcesPrice = 100;
let landPrice = 500;
let soldierPrice = 200;
let tankPrice = 500;

function buyResources(quantity) {
    let cost = resourcesPrice * quantity;
    if (player.credits < cost) {
        console.log("Not enough credits");
        return;
    }
    player.credits -= cost;
    player.economy.resources += quantity;
    console.log(quantity + " resources purchased for " + cost + " credits, remaining credits: " + player.credits);
}

function sellResources(quantity) {
    if (player.economy.resources < quantity) {
        console.log("Not enough resources to sell");
        return;
    }
    let income = resourcesPrice * quantity;
    player.credits += income;
    player.economy.resources -= quantity;
    console.log(quantity + " resources sold for " + income + " credits, remaining resources: " + player.economy.resources);
}

function buyLand(quantity) {
    let cost = landPrice * quantity;
    if (player.credits < cost) {
        console.log("Not enough credits");
        return;
    }
    player.credits -= cost;
    player.economy.land += quantity;
    console.log(quantity + " land purchased for " + cost + " credits, remaining credits: " + player.credits);
}

function buyArmyUnit(unit, quantity) {
    let cost;
    if (unit === "soldier") {
        cost = soldierPrice * quantity;
    } else if (unit === "tank") {
        cost = tankPrice * quantity;
    } else {
        console.log("Invalid unit type");
        return;
    }
    if (player.credits < cost) {
        console.log("Not enough credits");
        return;
    }
    player.credits -= cost;
    player.army[unit] += quantity;
    console.log(quantity + " " + unit + "(s) purchased for " + cost + " credits, remaining credits: " + player.credits);
}

//example usage:
buyResources(5);
buyLand(2);
buyArmyUnit("soldier");

