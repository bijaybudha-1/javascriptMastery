// 1. for in loop

// i. object
const myObject = {
    Np: "Nepal",
    USA: "United State of America",
    AS: "Austrila",
    CH: "China"
};

for (const key in myObject) {
    // if ouput only key
    // console.log(key)

    // if output value
    // console.log(myObject[key]);

    // if ouput both key and values
    // console.log(`${key}: ${myObject[key]}`);
}

// ii. array

const myFruits = ["Apple", "Banana", "Orange", "Mango"];

for (const fruits in myFruits) {
    // normal output
    // console.log(fruits);

    // output: Actaul array value
    // console.log(myFruits[fruits]);
    
}

