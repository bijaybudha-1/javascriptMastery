# Functions

> A **function** is a block of code designed to perform a particular task. You can define a function once and call it multiple times.
> 

### **1. Function Declaration**

A function declaration defines a function with a specific name and can be called after it's defined.

```jsx
// Function declaration
function greet(name) {
  console.log('Hello, ' + name);
}

// Calling the function
greet('Shubhadip');  // Output: Hello, Shubhadip
```

- The `greet` function takes a parameter `name` and logs a greeting message.
- Function declarations are hoisted, meaning they can be called before their definition.

### **2. Function Expression**

A function expression assigns a function to a variable. The function can be anonymous (without a name) or named.

```jsx
// Function expression
const add = function(a, b) {
  return a + b;
};

// Calling the function
console.log(add(2, 3));  // Output: 5

```

- The function is stored in the variable `add`.
- Function expressions are **not hoisted**, so they must be called after they are defined.

### **3. Arrow Function (ES6)**

Arrow functions provide a shorter syntax for writing functions.

```jsx
// Arrow function
const multiply = (a, b) => a * b;

// Calling the function
console.log(multiply(2, 3));  // Output: 6

```

- Arrow functions are often more concise, especially when there’s only one expression.
- They also don't have their own `this` context, so they behave differently in certain situations.

### **4. Function with Return Statement**

A function can return a value that can be used later.

```jsx
function square(x) {
  return x * x;
}

console.log(square(4));  // Output: 16

```

- The `return` keyword exits the function and returns a value.

### **5. Function with Default Parameters (ES6)**

You can assign default values to parameters in case no value is passed during the function call.

```jsx
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}

greet();          // Output: Hello, Guest
greet('Shubhadip'); // Output: Hello, Shubhadip

```

- If `name` is not provided, it defaults to 'Guest'.

### **6. IIFE (Immediately Invoked Function Expression)**

An IIFE is a function that is executed immediately after it is defined.

```jsx
(function() {
  console.log('This is an IIFE!');
})();  // Output: This is an IIFE!

```

- IIFEs are useful for creating a local scope, so variables do not interfere with other code.

### **7. Anonymous Function**

A function that does not have a name. It’s often used when you need a function temporarily.

```jsx
setTimeout(function() {
  console.log('This runs after 2 seconds');
}, 2000);

```

- The function does not have a name but can still be called or passed around.

---

### **Function Parameters and Arguments**

- **Parameters** are the variables listed in the function definition.
- **Arguments** are the actual values you pass to the function when you call it.

Example:

```jsx
function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));  // Output: 7

```

Here, `a` and `b` are **parameters**, and `3` and `4` are the **arguments**.

---

### **Function Scope**

- Functions in JavaScript have their own scope. Variables declared inside a function are **local** to that function and cannot be accessed outside of it.

```jsx
function testScope() {
  let localVar = 'I am inside the function';
  console.log(localVar);  // Output: I am inside the function
}

testScope();

console.log(localVar);  // Error: localVar is not defined

```

---

### **Returning Functions**

You can return functions from other functions.

```jsx
function outerFunction() {
  return function innerFunction() {
    console.log('I am the inner function!');
  };
}

const myFunction = outerFunction();
myFunction();  // Output: I am the inner function!

```

---

### **Summary of Functions**

| **Type of Function** | **Example** | **Key Point** |
| --- | --- | --- |
| **Function Declaration** | `function greet() {}` | Can be called before the function is defined (hoisted) |
| **Function Expression** | `const add = function() {}` | Must be called after it is defined |
| **Arrow Function** | `const multiply = () => {}` | Shorter syntax, no `this` binding |
| **Return Statement** | `return value;` | Returns a value from the function |
| **Default Parameters** | `function greet(name = 'Guest') {}` | Provides default values for parameters |
| **IIFE** | `(function() { })();` | Executes immediately after definition |
| **Anonymous Function** | `setTimeout(function() {})` | Functions without a name |

Functions are the building blocks of JavaScript programs and are crucial for reusability and organization of code!