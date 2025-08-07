const UserInfo = new Object();

UserInfo.userId = "user283";
UserInfo.username = "user1";
UserInfo.isLoggedin = false;
// console.log(UserInfo);

const studentInfo = {
    fullname: {
        firstname: "Dipesh",
        lastName: "Saud"
    },
    email: "dipeshsaud123@gmail.com",
    address: {
        permanent: {
            state: {
                city: "Kathmandu"
            }
        }
    }
}

// console.log(studentInfo);
// console.log(studentInfo.fullname);
// console.log(studentInfo.address.permanent.state);

const obj1 = {
    username: "bijay",
    age: 18,
    email: "bijay@gmail.com"
};

const obj2 = {
    fullname: "Bijay Budha",
    address: "Koteshwor"
};

const obj3 = {
    phone: 9814635752,
    gender: "male"
}

// assign()
const obj4 = Object.assign(obj1, obj2)
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5);

// spread
const obj6 = {...obj1, ...obj2, ...obj3};
// console.log(obj6);

const userDetails = [
    {
        userId: 1,
        username: "bijaybudha",
        password: 123
    },
    {
        userId: 2,
        username: "dipeshsaud",
        password: 333
    },
    {
        userId: 3,
        username: "yubrajnayak",
        password: 9373
    }
];

// console.log(userDetails[0].username);

// Object.keys
// console.log(Object.keys(obj5));

// Object.values
// console.log(Object.values(obj5));

// Object.entries
// console.log(Object.entries(obj5));

// check property exist or not
console.log(obj5.hasOwnProperty('bloodGroup'));
