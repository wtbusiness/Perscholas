// How do we assign a value to a variable?
// let variable = 10;

// How do we change the value of a variable?
//let variable = 10;

//  function start() {
//    variable = 20;
//  }
//  console.log(variable + 20);

// How do we assign an existing variable to a new variable?
 let myVar;
 myVar = 5;
// let myNum;
// myNum = myVar;

// Remind me, what are declare, assign, and define?
//creating a variable in JS is called "declaring" a variable.
//let carName;


//The assignment (=) operator is used to assign a value to a variable. The assignment operation evaluates to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple variables.

//Functions are defined, or declared, with the function keyword. Below is the syntax for a function in JavaScript.

// function nameOfFunction() {
//   // Code to be executed
// }

// What is pseudocoding and why should you do it?

// psuedocoding is writing out each step to help you figure out a problem.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// 70% - psuedocode important so that you make sure that you underestand the problems. Ask questions as you go through the problem to make sure you stay on track.

// Create a variable called firstVariable
//let firstVariable = "Hello World";

// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// firstVariable = 3
// Store the value of firstVariablein a new variable called secondVariable

//firstVariable = secondVariable;
// Change the value of secondVariableto any string.

//secondVariable = "How you doin?"
// What is the value of firstVariable?

//"How you doin"
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// let YourNameand = "Wayne";
// console.log(`Hello, my name is ${YourNameand}`);

// Booleans

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  if (a < b) {
    console.log(true);
  }else {
    console.log(false);
  }

  //next
  if (c > d) {
    console.log(true);
  }else {
    console.log( false);
  }

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
 console.log(false || false || false || false || false || true);
  console.log(false == false);
  console.log(e == 'Kevin');
  console.log(a < b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a + a < d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  //The farm

//   Declare a variable animal. Set it to be either "cow" or something else
//let animal = "cow";

// Write code that will print out "mooooo" if the it is equal to cow

// if (animal === "cow") {
//     console.log("mooooo");
// } else {
//     console.log(`Hey! You're not a cow.`);
// }
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// const person = 22;
// if (person >= 16 ) {
//     console.log(`Here are the keys!`);
// } else {
//     console.log(`Sorry. Your too young.`);
// }

// // The Basics

// for (let i = 0; i <= 10; i++) {
//   i;
// }


// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// for (let i = 12; i <= 4000; i+= 3) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i ++) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// } 

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 5 === 0) {
//     console.log(i);
//     console.log(`I found (i). High Five.`)
//   } if else(i % 3){
//     console.log(i);
//     console.log(`I found (i). Three is a crowd`)
//   }
// } 

// saving account


//arrays and control flow

// What are the things in an array called?
//objects

// Do Arrays guarantee those things will be in order?
//yes
// What real-life thing could you model with an array?
//toaster


// Easy does it

// let quotes = ["To be or not to be", "If life were predictable it would cease to be life, and be without flavor.", "Life is what happens when you're busy making other plans" ];

// accessing elements

// const randomThings = [1, 10, "Hello", true];

// console.log(randomThings[0]);
// randomThings[2] = "World";
// console.log(randomThings);

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log(ourClass[2]);
// ourClass[4] = "Octocat"
// ourClass.push("Cloud City");
// console.log(ourClass);

// mix it up

// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon");
// myArray.push("Degon");
// myArray.shift();
// myArray.unshift("Bob Marley");
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.prototype.reverse();

if ( num <= 100) {
    console.log('little number');
} else {
    console.log('big number');
}