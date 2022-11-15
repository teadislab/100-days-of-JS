//Types of Number in JS
//Integers are floating-point numbers without a fraction. They can either be positive or negative, e.g. 10, 400, or -5.
//Floating point numbers (floats) have decimal points and decimal places, for example 12.5, and 56.7786543.
//Doubles are a specific type of floating point number that have greater precision than standard floating point numbers (meaning that they are accurate to a greater number of decimal places).
const myInt = 5;
const myFloat = 6.667;

//String
//declearing a String
const string = "The revolution will not be televised.";
//there are two types of wraping in JS
//Single Quotes Vs. double Quotes
const sgl = 'Single quotes.';
const dbl = "Double quotes";
//The browser will think the string has not been closed because the other type of quote you are not using to contain your strings can appear in the string. 
//For example, both of these are okay:
const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";

//Escaping characters in a string
//Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. 
//In JavaScript, we do this by putting a backslash just before the character. 
const bigmouth = 'I\'ve got no right to take my place…'; 

//Concatenating String
//Concatenate just means "join together". 
//To join together strings in JavaScript you can use a different type of string, called a template literal.
const name = "Chris";
const greeting = `Hello, ${name}`
