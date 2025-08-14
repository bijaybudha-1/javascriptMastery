const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = numbers.map((item) => item);
// console.log(myNumber);

myNumber = numbers.map((item) => {
  return item + 10;
});
// console.log(myNumber);

myNumber = numbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num / 2;
  });

// console.log(myNumber);

myNumber = numbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num / 2;
  })
  .filter((num) => num % 2 === 0)
  .filter((num) => num % 3 === 0)

console.log(myNumber);
