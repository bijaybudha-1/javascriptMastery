let num1 = -12;
let num2 = 4.6;
let num3 = 16;

// Absolute value of a negative number
console.log(Math.abs(num1));  // Output: 12

// Round a decimal number
console.log(Math.round(num2));  // Output: 5

// Square root of a number
console.log(Math.sqrt(num3));  // Output: 4

// Generating a random number
let randomNum = Math.random() * 10;
console.log(randomNum);  // Output: A random number between 0 and 10

// Power of a number
console.log(Math.pow(2, 3));  // Output: 8

// Maximum of numbers
console.log(Math.max(10, 20, 5));  // Output: 20

// Minimum of numbers
console.log(Math.min(10, 20, 5));  // Output: 5

// Math.ceil(): Returns the smallest integer greater than or equal to `x`
console.log(Math.ceil(num2));


// Math.floor(): Returns the largest integer less than or equal to `x`.
console.log(Math.floor(num2));


// Math.random(): Returns a random floating-point number between `0` (inclusive) and `1` (exclusive).
console.log(Math.random());

console.log(Math.floor(Math.random() * 10 ) + 1);

// Another Interesting Method
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
