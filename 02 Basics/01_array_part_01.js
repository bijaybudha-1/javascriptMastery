// Array

const myArray = [10, 2, 45, 3, 56, 9];
// console.log(myArray);

myArray.push(20);
myArray.push(5);
// console.log(myArray);

myArray.pop();
// console.log(myArray);

myArray.unshift(4);
// console.log(myArray);

myArray.shift(2);
// console.log(myArray);

// console.log(myArray.indexOf(20));
// console.log(myArray.indexOf(45));
// console.log(myArray.indexOf(100));

// includes()
// console.log(myArray.includes(10));
// console.log(myArray.includes(100));
// console.log(myArray.includes(2));


const anotherArray = ['bijay', 'bijay@12', 18, 'koteshwor'];
const newArray = myArray.join()
// console.log(myArray);
// console.log(typeof myArray);

// console.log(newArray);
// console.log(typeof newArray);


// Slcie, splice

const sliceArray = myArray.slice(0, 5)
// console.log(sliceArray);

const spliceArray = myArray
// console.log(spliceArray.splice(1, 3));

// console.log(spliceArray);

const myNumber = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let mynum1 = myNumber.slice(1, 5)
console.log(mynum1);
console.log(myNumber);


let mynum2 = myNumber.splice(1, 5);
console.log(mynum2);
console.log(myNumber);




