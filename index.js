/* let interestRate = 0.3;
interestRate = 1;
console.log(interestRate); */

/* // primitive/value types
String, number, boolean,undefined, null
Reference value types:
Object
Array
Function

*/

let name = "Shilpa"; // String literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstNAme = undefined;
let selectedColor = null; // used in situations where we want to clear the value of a variable

/* 
Reference value types:
Object
Array
Function

*/
//Object - when  we are dealing with multiple personal objects related to a person , we can put that inside an object.
// instead of declaring different person variables we can declare an object.

let person = {
  nme: "Mosh",
  age: 25,
};

// Dot  Notation
person.nme = "Shilpa";
// {} is called an Object literal.
// bracket notation
person["nme"] = "Sakura";

console.log(person.nme);

//Arrays

let chosenColors = ["green", "blue"];
chosenColors[2] = "red";
chosenColors[3] = 1;
console.log(chosenColors.length);

//Functions- these are building blocks of JS
function greet(nme) {
  console.log("Hello " + nme);
} // we dont need a ; at the end while declaring a function because we are not declaring it like a variable.

greet("Shilly");
greet("Johnny");

/* // here shilly is an argument to the greet function and nme is parameter.
we have parameter at the time of declaration, argument is the actual value for the parameter 
nme is an input for this function greet and is only meaningful inside of this function.
*/
// TYPES OF FUNCTIONS
// 1. Performing a task
function greet(nme,lastName) { //a fn can have multiple parameters
    console.log("Hello " + nme + ' '+ lastName);
}
greet("Shilly",'Jordan');

// 2.Calculating a value
function square(number){
    return number * number;
}

square(2);
console.log(square(2));