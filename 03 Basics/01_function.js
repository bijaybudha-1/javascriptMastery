function sayMyName() {
    name = "Bijay";
    for(i = 0; i < name.length; i++) {
        console.log(name[i].toUpperCase());
    }
}

// sayMyName()

function addTwoNumber(num1, num2){
    return num1 + num2;
}

let result = addTwoNumber(5, 4);
// console.log(result);

function greetingMessage(username) {
    if (username === undefined) {
        return `please enter a username`;
    }
    return `Welcome back to ${username}`;
};

const greetingValue = greetingMessage("Bijay Budha");
// console.log(greetingValue);

function sayHello(username = "Roman") {
    if (!username) {
        return "Please enter a username";
    }
    return `Welcome back to ${username}`;
}

const output = sayHello("Bijay Budha");
// console.log(output);

function totalCartAmount(item1, item2, ...item) {
    return item
}

const totalAmount = totalCartAmount(45, 74, 40, 60, 30);
// console.log(totalAmount);

// Passing Object

const user = {
    username: "bijaybudha",
    email: "bijaybudha123@gmail.com" 
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and email is ${anyObject.email}`);
};

// handleObject(user);

// Passing Array
const myArray = ["Apple", "Banana", "Mango", "Grapes"];

function handleArray(anyArray) {
    // return anyArray[0]
    // Or
    for(i = 0; i < anyArray.length; i++) {
        console.log(anyArray[i]);
    }
}

handleArray(myArray);

