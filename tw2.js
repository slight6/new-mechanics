// Initialize player's starting credits
let player = {
    "credits": 1000,
    "ship": {
        "location": 0,
        "resources": {
            "resource1": 0,
            "resource2": 0,
            "resource3": 0
        }
    }
}

// Resources prices
let resourcePrices = {
    "resource1": 100,
    "resource2": 200,
    "resource3": 300
}

// Sectors
let sectors = [
    {
        "name": "Sector 1",
        "exits": [1, 2, 3, 4, 5, 6],
        "planet": {
            "resource1": 10,
            "resource2": 5,
            "resource3": 0
        },
        "port": {
            "resource1": 20,
            "resource2": 15,
            "resource3": 10
        }
    },
    {
        "name": "Sector 2",
        "exits": [0, 2, 3, 4, 5, 7],
        "planet": {
            "resource1": 15,
            "resource2": 10,
            "resource3": 5
        },
        "port": {
            "resource1": 25,
            "resource2": 20,
            "resource3": 15
        }
    },
    // 8 more sectors with similar structure
];

// Function to move to a new sector
function moveToSector(sector) {
    if (sector < 0 || sector >= sectors.length) {
        console.log("Invalid sector number.");
        return;
    }
    if (!sectors[player.ship.location].exits.includes(sector)) {
        console.log("Cannot move to sector " + sector + " from sector " + player.ship.location + ".");
        return;
    }
    player.ship.location = sector;
    console.log("Moved to sector " + sectors[sector].name + ".");
}

// Function to trade resources at the port
function tradeResources(resource, quantity, buy) {
    if (!resourcePrices.hasOwnProperty(resource)) {
        console.log("Invalid resource.");
        return;
    }
    if (!sectors[player.ship.location].port.hasOwnProperty(resource)) {
        console.log("Resource not available at port")
    }
}

