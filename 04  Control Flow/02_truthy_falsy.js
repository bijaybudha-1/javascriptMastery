// 1. Truthy Values
// "0", 'false', " ", [], {}, function(){}, 

// 2. Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

const username = 'bijay';

if(username) {
    console.log("Username is found");   
} else {
    console.log("Username not found");
}

//1.  Find Empty Array

// const studentList = [];
const studentList = ["dipesh", "yubraj"];

if(studentList.length === 0){
    console.log("Empty Array");
} else if (studentList) {
    console.log("Array List Found");
} else {
    console.log("Default case"); 
}

//2. Find Empty Object
const emptyObj = {};

if(Object.keys(emptyObj).length === 0) {
    console.log("Empty Object");
} else {
    console.log("Object not Empty");
}

// 3. Nullish Coalescing Operator (??): null undefined

let value1;
value1 = 3 ?? 6;
value1 = null ?? 6;
value1 = undefined ?? 6;
value1 = undefined ?? 10 ?? 6;

console.log(value1);

// 4. Terniary Operator
// Syntax:
// Condition ? true : false;

const price = 200;
price >= 100 ? console.log("Price more than 100") : console.log("Price less than 100");

