// 1. for of loop

// i. Example 1

const numbers = [1, 2, 3, 4, 5, 6, 7];

for (const number of numbers) {
    // console.log(number);
};

// ii. Example 2

const greetings = "Hello Bijay";

// without using continue
for (const greeting of greetings) {
    // console.log(greeting);
}


// using continue
for (const greeting of greetings) {
    if(greeting === " ") {
        continue;
    }
    // console.log(greeting);
}

const map = new Map();
map.set("USA", "United State of America");
map.set("NP", "Nepal");
map.set("IN", "India");
map.set("CH", "China");
map.set("NP", "Nepal");

// console.log(map);

// Method 1:
for (const key of map) {
    console.log(map); 
}

// Method 2
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
    
}

