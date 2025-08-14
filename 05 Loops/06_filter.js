const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];

let myNums = numbers.filter((num) => num >= 5);
// console.log(myNums);

const newArray = [];
myNums = numbers.filter((num) => {
    if (num >= 5) {
        newArray.push(num + 10)
        return num
    }      
});

// console.log(myNums);

// console.log(newArray);

const fruitsList = [
    {
        name: "Apple",
        price: 350,
        color: "Red",
        origin: "Mustang"
    },
    {
        name: "Banana",
        price: 120,
        color: "Yellow",
        origin: "Chitwan"
    },
    {
        name: "Orange",
        price: 200,
        color: "Orange",
        origin: "Syangja"
    },
    {
        name: "Grapes",
        price: 500,
        color: "Purple",
        origin: "Bhaktapur"
    },
    {
        name: "Mango",
        price: 250,
        color: "Yellow",
        origin: "Terai"
    },
    {
        name: "Pineapple",
        price: 300,
        color: "Brown",
        origin: "Jhapa"
    },
    {
        name: "Papaya",
        price: 150,
        color: "Orange",
        origin: "Kailali"
    },
    {
        name: "Watermelon",
        price: 100,
        color: "Green",
        origin: "Bardiya"
    },
    {
        name: "Kiwi",
        price: 600,
        color: "Brown",
        origin: "Ilam"
    },
    {
        name: "Litchi",
        price: 400,
        color: "Red",
        origin: "Morang"
    }
];

let fruitsData = fruitsList.filter((fruit) => {
    if(fruit.origin === "Mustang") {
        return fruit
    }
});

// console.log(fruitsData);

fruitsData = fruitsList.filter((fruit) => {
    if(fruit.color === "Red" && fruit.price >= "150") {
        fruit.stock = "Out of Stock";
        return fruit
    }
});
// console.log(fruitsData);

fruitsData = fruitsList.filter((fruit) => {
    if (fruit.color === "Yellow" || fruit.origin === "Morang") {
        return fruit
    };
});

console.log(fruitsData);