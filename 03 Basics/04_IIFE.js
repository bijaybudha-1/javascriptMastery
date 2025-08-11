// 1. named IIFE
(function myName(){
    console.log("My Name is Bijay Budha");
})();


// 2. simple IIFE or no named IIFE
(() => {
    console.log("Dipesh Saud");  
})();

// 3. variable or argument passing IIFE
((name) => {
    console.log(`My name is ${name}`);
})("Bijay Budha");