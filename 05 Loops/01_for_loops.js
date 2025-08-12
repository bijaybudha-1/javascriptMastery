for (let i = 1; i <= 10; i++) {
    // console.log(i);        
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`);
    // console.log(`Multiple Table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop: ${j}`);
        // console.log(`${i} X ${j} = ${i * j}`);
    }
}

// Looping in Array

const fruitsName = ["Apple", "Banana", "Graps", "Pine Apple", "Water melon"];

for (let i = 0; i < fruitsName.length; i++) {
    const element = fruitsName[i];
    // console.log(element);   
}

// Break and Continue

// 1. Break
for (let i = 1; i <= 20; i++) {
    if (i === 7) {
        // console.log("The number of 7 is detected");
        break;
    }
    // console.log("The value of number", i);
}

// 2. Continue
for (let i = 1; i <= 20; i++) {
    if (i === 7) {
        console.log("The number of 7 is detected");
        continue
    }
    console.log("The value of number", i); 
}