const userDetails = {
    username: "bijay",
    "fullname": "Bijay Budha",
    age: 18,
    email: "winnerbijay123@gmail.com",
    phone: 9814635755,
    address: "koteshwor"
}

// 1. Accessing Object Value
// console.log(userDetails.username);
// console.log(userDetails["fullname"]);

// 2. Update the Object value
userDetails.email = "bijay123@gmail.com";
// console.log(userDetails.email);

// 3. Lock the object
// Object.freeze(userDetails); 
userDetails.username = "bijaybudha";
// console.log(userDetails);

// Adding Function in object
userDetails.greeting = function() {
    return "Hello User";
};

console.log(userDetails.greeting());

userDetails.greeting2 = function() {
     console.log(`Hello, ${this.fullname}`);
};

userDetails.greeting2()
