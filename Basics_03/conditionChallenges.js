// Qn.1. Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;

if(num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num2} is greater than ${num1}`);
}

// Qn.2. Checking if a string is equal to another string.

let username1 = "bijay";
let username2 = "bijay";

if (username1 === username2) {
    console.log("String is equal to another string");   
} else {
    console.log("String is not equal to another string");
}

// Qn.3. Checking if a variable is a number or not

let score = 15;

if (typeof score === 'number') {
    console.log("It is a number");
} else {
    console.log("It is not a number");
}

//Qn.4. Checking if a boolean value is true or false;

let boolValue = true;

if (boolValue) {
    console.log("Boolean value is true");
    
} else {
    console.log("Boolean value is false");
    
}

// Checkinf if an arrary is empty or not.

let items = [];

if (items.length === 0) {
    console.log("Empty Array"); 
} else {
    console.log("Not Empty Array");
    
}