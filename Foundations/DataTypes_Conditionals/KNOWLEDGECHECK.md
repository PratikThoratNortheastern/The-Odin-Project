# KNOWLEDGE CHECK DATA TYPES AND CONDITIONALS

## What are the eight data types in JavaScript?

> The 8 JavaScript Data types are: Number, String, Boolean, BigInt, null, undefined, Object and Symbol

## Which data type is NOT primitive?

> Object is a non-primitive data type.

## What is the relationship between null and undefined?

> There is a difference between them. Null basically means empty/nothing/hollow. undefined is not necessary. There is a value. we just do not know it yet or the value is not declared or definite.

## What is the difference between single, double, and backtick quotes for strings?

> Single and double quotes are used to hold string or text based values. They work in the same way. However, the backticks have one more feature. We can embed javascript inside them. Backticks are also called as Template literals.

## What is the term for joining strings together?

> Concatenation.

## Which type of quote lets you embed variables/expressions in a string?

> Backticks. Also known as template literals

## How do you embed variables/expressions in a string?

> We use the `backticks` for this purpose. Example: `This is ${2+8} how we do it.`

## How do you use escape characters in a string?

> We use the \ backslash for this purpose.

## What is the difference between the slice/substring string methods?

> `slice` and `substring` are methods that return a part of the string. However, `slice` allows negative indexing but `substring` does not allow it.

## What are the three logical operators, and what do they stand for?

> The Three logical operators and AND (`&`); OR (`|`) and NOT (`!`). They are derived from logic gates and give a boolean value after evaluation of the expressions.

## What are the comparison operators?

> These operators are used to compare values and they are `>`; `<`; `>=`; `>=`; `==`; `===`; `!=` and `!==`

## What are truthy and falsy values?

> truthy values return true. Like numbers, non-empty strings. falsy values return false. like empty strings, 0, null, undefined, -0, NaN

## What are the falsy values in JavaScript?

> false, 0, -0, NaN, "", null, undefined, document.all (The only falsy Object in JS)

## What are conditionals?

> if-else, if, if-else-if-else.

## What is the syntax for an if/else conditional?

>

## What is the syntax for a switch statement?

> `const expr = 'Papayas';
switch (expr) {
 case 'Oranges':
   console.log('Oranges are $0.59 a pound.');
   break;
 case 'Mangoes':
 case 'Papayas':
   console.log('Mangoes and papayas are $2.79 a pound.');
   // Expected output: "Mangoes and papayas are $2.79 a pound."
   break;
 default:
   console.log(`Sorry, we are out of ${expr}.`);
}`

## What is the syntax for a ternary operator?

> expression ? executes when true : executes when false.

## What is nesting?

> Nesting means one syntax inside another. We have nested conditional statements as well if (condition) {if()}else{}
