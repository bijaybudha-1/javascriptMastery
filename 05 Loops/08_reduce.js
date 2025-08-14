const myNum = [1, 2, 3, 4, 5];

let myTotal = myNum.reduce(function(acc, currval) {
    // console.log(`Acc: ${acc} and currval: ${currval} `);
    return acc + currval
}, 0);

// console.log(myTotal);


myTotal =myNum.reduce((acc, curVal) => acc+curVal, 0);
// console.log(myTotal);

const shoppingCart = [
    {
        courseName: "Js Mastery",
        price: 3999
    },
    {
        courseName: "React Complete Guide",
        price: 4999
    },
    {
        courseName: "Node.js API Development",
        price: 4599
    },
    {
        courseName: "Full Stack MERN Bootcamp",
        price: 7999
    },
    {
        courseName: "Python for Beginners",
        price: 2999
    },
    {
        courseName: "Advanced CSS & SASS",
        price: 3499
    },
    {
        courseName: "TypeScript Masterclass",
        price: 3799
    },
    {
        courseName: "Data Structures & Algorithms in JS",
        price: 5499
    },
    {
        courseName: "Next.js with Tailwind CSS",
        price: 4299
    },
    {
        courseName: "Docker & Kubernetes Essentials",
        price: 4899
    }
];

const myBill = shoppingCart.reduce((acc, courses) => acc + courses.price, 0);
// console.log(myBill);

const billDetails = shoppingCart.reduce((acc, courses) => {
    console.log(`Acc: ${acc} and price: ${courses.price}`);
    return acc + courses.price
}, 0);

console.log("Total:", billDetails);
