"use strict";

/*
Topics covered:
Arrays -> Array as a Data Structure and Basic array methods
Loops -> using them to iterate over things or perform repeating looping tasks ;)
TDD -> Test Driven Development. The most important part of software development (Kinda boring but essential)
*/

// ARRAYS
// Arrays are special variables which can hold more than one value.
// This array below will be used for
const lanaDelReyAlbums = [
  "Born to Die",
  "Paradise",
  "Honeymoon",
  "Lust for life",
  "Ultraviolence",
  "Blue Banisters",
  "Chemtrails over country club",
  "There is a tunnel under the boulevard",
];

// creating arrays
// const array_name = [];
// Creating const arrays is a general convention

/* 
sometimes declaration can span multiple lines:
const cars_one = [
  "Volvo",
  "Mercedes",
  "Mustang",
  "Ferrari"
];
*/

// creating an array and providing elements

// const lanaDelReyAlbums = [];
// lanaDelReyAlbums[0] = "Born to Die";
// lanaDelReyAlbums[1] = "Paradise";
// lanaDelReyAlbums[2] = "Honeymoon";
// lanaDelReyAlbums[3] = "Lust for life";
// lanaDelReyAlbums[4] = "Ultraviolence";
// lanaDelReyAlbums[5] = "Blue Banisters";
// lanaDelReyAlbums[6] = "Chemtrails over country club";
// lanaDelReyAlbums[7] = "There is a tunnel under the boulevard";
// console.log(lanaDelReyAlbums);

// using the new keyword
// const lanaDelReyAlbums = new Array();
// there is no need to use the new method.
// for better speed and performance execution, use this way of creating array -> []

//Accessing Arrays
// console.log(lanaDelReyAlbums[5]);

// lanaDelReyAlbums[4] = "Melancholia";
// console.log(lanaDelReyAlbums);

// Converting an Array to string using the toString Method.
// console.log(lanaDelReyAlbums.toString());
// console.log(typeof lanaDelReyAlbums.toString());

// Access the full array.
// we can access the entire array by calling the name of the array.
// console.log(lanaDelReyAlbums);

// Arrays and Objects
// Arrays are special kinds of objects. the typeof array will output as object
// console.log(typeof lanaDelReyAlbums);
// While objects use it's members key to access values, arrays uses numbers(known as index) to access it's elements

// Array Methods

// This is where the fun really begins. Array methods are the real deal!

// The length property
// console.log(lanaDelReyAlbums.length);

// Accessing first array element
// console.log(lanaDelReyAlbums[0]);

// Accessing last array element
// console.log(lanaDelReyAlbums[lanaDelReyAlbums.length - 1]);

// Looping through Array Elements:
// using for loop
// this loops through all elements in array
// for (let i = 0; i < lanaDelReyAlbums.length; i++) {
//   console.log(lanaDelReyAlbums[i]);
// }

// we can also use forEach
// lanaDelReyAlbums.forEach((albums) => {
//   console.log(albums);
// });

// Adding elements
// using push. It adds elements at the end
// lanaDelReyAlbums.push("Young like me", "Melancholia");
// console.log(lanaDelReyAlbums);

// how to find out if the array is actually an array?
// use the isArray() method
// console.log(Array.isArray(lanaDelReyAlbums));

//flattening arrays:
// const lanaDelReyAlbums2 = [
//   ["Born to Die", "Paradise"],
//   ["Honeymoon", "Lust for life"],
//   ["Ultraviolence", "Blue Banisters"],
//   ["Chemtrails over country club", "There is a tunnel under the boulevard"],
// ];

// console.log(lanaDelReyAlbums2.flat());
/*
Output of array flatening
[
  'Born to Die',
  'Paradise',
  'Honeymoon',
  'Lust for life',
  'Ultraviolence',
  'Blue Banisters',
  'Chemtrails over country club',
  'There is a tunnel under the boulevard'
]*/

// Array Flatmap
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => [x, x * 10]);
// console.log(myArr);
// console.log(newArr);

// Array Splicing
// const fruits = ["Banana", "Oranges", "Apple", "Mango"];
// fruits.splice(1, 1, "lemon", "kiwi");
// console.log(fruits);
// we can also use the toSpliced() method which basically does not alter the original array and returns us the new array.

// array slice method.
// This method will creates a new array which slices out a part of the original array. But it does not do anything to the original array. It returns a new array.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
//takes element from index 1(included) upto index 3 (index 3 not included)
// console.log(citrus); output: ['Orange','Lemon']
// if we see only one argument in the slice method, fruits.slice(1), it will take the end argument

// Iteration using for..of Loop

// for (const songs in lanaDelReyAlbums) {
//   console.log(lanaDelReyAlbums[songs]);
// }

// map() and filter()

// map() does something to every element in the array and returns a new array. the original array is untouched

// function toUpper(string) {
//   return string.toUpperCase();
// }

// const upperCaseAlbums = lanaDelReyAlbums.map(toUpper);
// console.log(upperCaseAlbums);

// const integerArray = [0, 1, 2, 3, 4];
// const doubledValues = integerArray.map((index) => index * 2);
// console.log(doubledValues);

// filter() will basically filter out the elements in the array as per the functions calculation and then add it to a new array and returns it.

// function isEvenNumber(number) {
//   return number % 2 === 0;
// }

const integerArray = [0, 1, 2, 3, 4];

const newIntArr = integerArray.filter((number) => {
  return number % 2 === 0;
});
console.log(newIntArr);
