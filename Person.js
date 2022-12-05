class Person{
    constructor(eyeColor, hairColor, weight){
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.weight = weight;
    }
    greeting(){
        console.log(`Hi. How are you?`);
    }

    introduction() {
        console.log(`My name is ...`);
    }

    favoriteCar() {
        console.log("Toyta");
    }
}
class PostWorker extends Person {
    constructor(experience, route, height, eyeColor, hairColor, weight) {
        super(eyeColor, hairColor, weight);
        this.experience = experience;
        this.route = route;
        this.height = height;  
    }
    delivery() {
        console.log("Here's your mail!");
    }

    smite(){
        console.log("You have a mean dog");
    }
    superSpeed() {
        super.favoriteCar();
        this.smite();
    }
}

class Chef extends Person {
  constructor(star, cuisine, skill, eyeColor, hairColor, weight) {
    super(eyeColor, hairColor, weight);
    this.star = star;
    this.cuisine = cuisine;
    this.skill = skill;
  }
  favCuisine() {
    return `Italian`;
  }

  favKnife() {
    return `Cutco`;
  }

  enjoy() {
    return `Bon Appetit`;
  }
}
const chef1 = new Chef('5', 'Thai', 'Grilling', 'blue', 'brown', 160);
const chef2 = new Chef(7, 'Korean', 'Frying', 'green', 'blonde', 180)
console.log(chef1);
const worker1 = new PostWorker('Beginner', 'North', 'short', 'blue', 'brown', 'tall');
const worker2 = new PostWorker('Pro', 'West', 170 );
console.log(worker1);