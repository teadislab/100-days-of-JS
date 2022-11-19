// There are 4 ways to declare variables
//using var, let, const and nothing
var x = 5;
var y = 6;
var z = x + y;
// var was used in the initial versions, this was a confusing one.
// The biggest drawback was redeclare.
var x=10;
//as demonstrated in above line
//let is mostly used as a versitile keyword
let a = 1;
let b = 1;
let c = a + b;

//Variable Types
//There is no need to specifiy Variable types in JS
//For intigers, floting points
let myAge = 22;
let pi = 3.14;
//String
let name = 'Aditya'
//Booleans
let iAmAlive = true;
//Arrays
let myNameArray = ['Aditya','Atharva','t3d'];
let myNumberArrya = [10,20,30];
//Objects
let dog = {name:'Spot', breed:'Dalmatian'}; 
//Finding String
const browserType = 'mozilla';
browserType.length;
//Retrieving a specific string character
browserType[0];
//Testing if a string contains a substring
const browserType = 'mozilla';

if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}