# KNOWLEDGE CHECK

## Q.1 Name three ways to declare a variable?

let, var, const

## Q.2 Which of the three variable declarations should you avoid and why?

var. Because in modern development we only use let and const. Var is used in legacy systems or code.

## Q.3 What rules should you follow when naming variables?

Correct Format: let my_name; let myName; let $name; let my_name
Incorrect: 1a; my-name

## Q.4 What happens when you add strings and numbers together?

When we add strings and numbers together, type coercion takes place and they concatanate. `a + 9 = a9`

## Q.5 How does the `%` operator work?

The remainder operator %, despite its appearance, is not related to percents
The result of a % b is the remainder of the integer division of a by b

## Q.6 Explain the difference between `==` and `===`

`==` is loose comparison and `===` is strict comparison. in `==` the datatypes of the expressions are not checked only the value. it allows type coercion too. which can lead to erros. However, `===` will not do so. It will strictly compare for equality on all ends and return false even if there is a mismatch of data types

## Q.7 When would you recieve a `NaN` result?

We receive this when the output is not a Number.

## Q.8 How do you increment or decrement a number?

we use the `++` operator for increment and `--` operator for decrement

## Q.9 Explain the difference between prefixing and postfixing increment/decrement operators

Prefixing: Value will increment and decrement on the spot? Post-fix: Increment happens after assignment.

## Q.10 How is operator precedence handled in Javascript?

PEMDAS. This is how it is handles in Javascript. Basically the operator with highest priority will be executed/calculated first. Then the rest.

## Q.11 How to access the developer tools?

We can access the developer tools by right clicking on our web browser and then click inspect. Or else we can press `F12` on chrome.

## Q.12 How do you log information into the console?

We use the console API to log everything to the console. For example `console.log` or `console.table` for tabular format

## What does unary plus operator do to string representations of integers? eg. +”10”

The unary operator converts a string representation of integer into an integer. For example `+"10"` will become `10`
