// notes and assignments from the MDN website of functions.
"use strict";
/*
Concepts in this file:
-> Syntax
-> invoke functions and define them
-> scope
-> parameters
*/

// Built in Browser functions
// Functions that were predefined. We have been using functions for while now.

// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");
// console.log(newString);

// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

// const number = Math.random();
// console.log(number);
// Math.random() generates a random number between 0 and upto but not including 1.

// Functions vs methods:
// Functions that are a part of an object are called methods.
// Functions not a part of objects are called .... Functions. Basically they are custom made and not built-in the browser.
// Note: Browser based functions are a part of BrowserAPI and not the core javascript language itself. Infact they were developed using langauges like C++

// Anonymous and Arrow Functions:

// This function is called anonymous function because it has no name.
// (function () {
//   console.log(Hello);
// });
// Generally we see anonymous functions when we expect a function being passed as a parameter.

// This form of creating and using functions are also called as function expressions.

// Arrow Functions

// Another (cool looking) way to write functions is arrow functions. It is a concise way to write functions and this syntax is used a lot in popular javascript libraries and frameworks such as NodeJs and ReactJs

// const arrowFunc = () => {
//   console.log("hello world");
// };

// Function Scope and Conflicts
// Variables inside the function cannot be accessed outside of the functions in which they are declared

// Return Values
// const myText = "The weather is cold";
// const newString = myText.replace("cold", "warm");
// console.log(newString); This line Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
