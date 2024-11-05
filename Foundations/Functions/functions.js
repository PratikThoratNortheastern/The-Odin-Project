"use strict";

// ASSIGNMENT

// 1)
function add7(number) {
  return number;
}

console.log(add7(7));

// 2)
function multiply(number_one, number_two) {
  return number_one * number_two;
}
console.log(multiply(2, 3));

// 3

function capitalize(input_string) {
  input_string =
    input_string[0].toUpperCase() + input_string.slice(1).toLowerCase();
  return input_string;
}

console.log(capitalize("not a Lazy MAN"));
// 4

function lastLetter(x) {
  return x.charAt(x.length - 1);
}

console.log(lastLetter("not a Lazy"));
