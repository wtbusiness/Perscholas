class Governor {
    static district = "Texas";
    static party = "independent"
    static haircut = "fade"
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    static vote(){
        return `I voted in Texas`
    }

    static town() {
        return "Austin"
    }
    static hairstyle(){
        return "waves"
    }
}
console.log(Governor.haircut);
console.log(Governor.hairstyle());
   
    

   

 



//create static properties
// class Person {
//   static eyeColors () {
//     return ['blue', 'green', 'brown'];
//   }
//   // rest of class definition here...
// }
// // more code...
// const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');
