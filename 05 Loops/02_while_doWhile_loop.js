// +++++++++++++ While Loop ++++++++++++++
// 1. Normal While loop
let index = 1;
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2;
}

// 2. While loop in array

const randomName = ['bijay', 'yubraj', 'dipesh', 'sushil'];
let count = 0;

while (count < randomName.length ) {
    console.log(`User name is ${randomName[count]}`);
    count++;
}

// ++++++++++++++++++ Do While loop ++++++++++++++++++

let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while(score <= 10);