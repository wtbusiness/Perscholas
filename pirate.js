class Pirate {
    constructor(name, ship, job) {
        this.name = name;
        this.ship = ship;
        this.job = job;
    }
    weaponOfChoice() {
        return this.job + ' skills'
    }
}

const pirate1 = new Pirate('Jerry', 'Big Boat', 'Cook');
const pirate2 = new Pirate('Andy', 'St. Maria', 'Navigation');
const pirate3 = new Pirate('Jahmal', 'Air France', 'Collector');

const blackPearl = [pirate1, pirate2, pirate3];
for (let i = 0; i < blackPearl.length; i++) {
    console.log(blackPearl[1])
}


console.log(pirate1.weaponOfChoice());
console.log(pirate2.weaponOfChoice());
console.log(pirate3.weaponOfChoice());


console.log(pirate1);
console.log(pirate2);
console.log(pirate3);
  
