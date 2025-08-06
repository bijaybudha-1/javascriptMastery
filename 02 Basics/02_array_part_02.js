const fruitName = ["Apple", "Banana", "Graps", "Mango"];
const vegetableName = ["Lady Finger", "Cabbage", "Potato", "Pumpkin"];

// 1. push()
// fruitName.push(vegetableName);
// console.log(fruitName);
// console.log(fruitName[4][1]);

// 2. concate()
let allList = fruitName.concat(vegetableName);
// console.log(allList);

// 3. Spread
let spreadArray = [...fruitName, ...vegetableName];
// console.log(spreadArray);

let myElement = [2, 4, 6, [3, 4,[2, 8], 5], 9, 28, [3, 5], [0, 1] ];

// 4. flat()
const samePathElement = myElement.flat(Infinity);
// console.log(samePathElement);

const depthOne = myElement.flat(1);
// console.log(depthOne);

// Another Way
console.log(Array.isArray("Bijay"));
console.log(Array.from("Bijay"));
console.log(Array.from({name: "bijay", age: 18}));

let num1 = 10
let num2 = 20
let num3 = 30;

console.log(Array.of(num1, num2, num3));

