// Dates

let today = new Date()
// console.log(today);
// console.log(today.toString());
// console.log(today.toDateString());
// console.log(today.toLocaleString());
// console.log(today.toLocaleDateString());

let mydate = new Date(2024, 0, 24)
// console.log(mydate);
// console.log(mydate.toDateString());

let newDate = new Date("2024-01-24");
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleDateString());

let anotherDate = new Date("01-24-2024")
// console.log(anotherDate);
// console.log(anotherDate.toDateString());
// console.log(anotherDate.toLocaleString());


// Time
let todayTime = Date.now() // or Date()
// console.log(todayTime);
// console.log(Math.floor(Date.now() / 1000));

let newMyDate = new Date();
console.log(newMyDate.getFullYear());
console.log(newMyDate.getMonth());
console.log(newMyDate.getHours());
console.log(newDate.getMinutes());


// Customize way
newDate.toLocaleString('default', {
    weekday: "long",
})