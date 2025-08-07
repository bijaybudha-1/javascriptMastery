const userDetails = {
    userId: 1,
    username: "bijaybudha",
    email: "bijay@gmail.com",
    age: 18
};

// 1. Object Destructure
const {username} = userDetails;
// console.log(username);

const {username: name} = userDetails
console.log(name);
