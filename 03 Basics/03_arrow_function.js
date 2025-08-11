const userDetails = {
    username: "bijaybudha",
    password: 1234,

    sayHello: function() {
        console.log(`Hello, ${this.username}`);
        
    }
};

userDetails.sayHello();
userDetails.username = "sushilkunwar";
userDetails.sayHello();


// function myName() {
//     let name = "Bijay Budha";
//     console.log(this.name);
// };

// myName();

// const myName = function() {
//     let name = "Bijay Budha";
//     console.log(this.name);
// };

// myName();

// const myName = () => {
//     let name = "Bijay Budha";
//     console.log(this.name);
// }

// myName();

// Arrow function

// 1. Normal Return Arrow Function
// const AddNumber = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(AddNumber(3, 2));

// 2. Implicit Return Arrow Function (Method 1)
const AddNumber = (num1, num2) => num1 + num2;
console.log(AddNumber(3, 2));

// 3. Implicit Return Arrow Function (Method 2)
// const AddNumber = (num1, num2) => (num1 + num2);
// console.log(AddNumber(3, 2));

// 3. Implicit Return Arrow Function (passing object)
// const myName = (name) => ({username: name});
// console.log(myName("Bijay Budha"));
// console.log(myName("Bijay Budha").username);
