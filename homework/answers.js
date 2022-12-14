////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 0; i <= 20; i++) {
  console.log(i);
}


////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i ++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log(i);
  }
} 

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 5 === 0) {
    console.log(i);
  }else if(i % 3){
    console.log(i);
  }
} 


////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001
console.log(plantee);
wolfy[3] = "Gotham City";
console.log(wolfy[3]);
dart.push("Hawkins");
console.log(dart);
wolfy[0] = 'Gameboy';
console.log(wolfy);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const element of ninjaTurtles) {
    console.log(element.toUpperCase());
    element.toUpperCase();
    
}
console.log(ninjaTurtles);



////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

let slicedElement = favMovies.slice(9);


console.log(favMovies[8]);
favMovies.sort();
console.log(favMovies);
favMovies.splice(3, 0,'Avatar');
console.log(favMovies);

favMovies.pop();
console.log(favMovies);
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);
favMovies.reverse();
console.log(favMovies);
favMovies.shift();
console.log(favMovies);

console.log(favMovies.slice(9));
console.log(favMovies.length);
console.log(favMovies.slice(9));
console.log(slicedElement);




// sorted movies front and back
////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

console.log("before ",whereIsWaldo);
for (let i = 0; i < whereIsWaldo.length; i++){
    if (whereIsWaldo[i].includes("Neff")) {
        whereIsWaldo[i].splice(2, 1, "No one")
    }
}
console.log("after ", whereIsWaldo);
console.log(whereIsWaldo);
console.log(whereIsWaldo);
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);


console.log(whereIsWaldo);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

const kittyTalk = [
  "Love me, pet me, HSSS!",
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away..."];
//let kittyTalk = [];
// let meow = 0;



// for (let i = 0; i <= 20; i++) {
//   console.log(`Love me, pet me, HSSS! `);
//   if (i % 2 === 0) {
//     console.log(kittyTalk[Math.floor(Math.random() * (kittyTalk.length - 1)) + 1]);
//   }
// } 
// console.log(kittyTalk);
////////////////////////////////
//  Find the Median
////////////////////////////////

[1,2,3,4].forEach((e) => console.log(e += 1))
const arr = ["dog", "cat", "zebra"]
function plusOne (arr) {
    for (let a of arr){
        console.log(a)
    }
}
plusOne(arr);

// for (let a of arr){
//          console.log(a)
//      }

const person ={
name: "Wayne",
pet: "shane",
hair: "black"
}
for(let p in person){
    console.log(p, person[p]);
}



// let names = ["jimmy", "sam", "steve"];
// for (let n of names){
//     console.log(n);
// }