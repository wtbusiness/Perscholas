class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    determineHumanAge() {
        return this.age * 24;
    }

    weaponOfChoice() {
        return this.color + ' sword'
    }

    favoriteFood() {
        return this.name + ' pizza'
    }
}


const cat1 = new Cat('Pug', 2 , 'black');
console.log(cat1);
const cat2 = new Cat('Tie', 4 , 'brown');
console.log(cat2);

console.log(cat1.determineHumanAge());
console.log(cat2.weaponOfChoice());
console.log(cat1.favoriteFood());

