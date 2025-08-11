# **Global Scope & Local Scope**

### **Global Scope and Local Scope in JavaScript**

> In JavaScript, **scope** refers to the accessibility of variables and functions in different parts of the code. JavaScript has two main types of scope: **Global Scope** and **Local Scope**.
> 

---

### **1. Global Scope**

- A variable or function declared in the **global scope** is accessible from anywhere in the code.
- In a browser environment, globally scoped variables become properties of the `window` object.

### Example of Global Scope:

```jsx
var globalVar = 'I am a global variable';

function showGlobalVar() {
  console.log(globalVar);  // Accessible here
}

showGlobalVar();            // Output: I am a global variable
console.log(globalVar);      // Output: I am a global variable

```

In this example:

- `globalVar` is accessible both inside and outside of `showGlobalVar()` because it was declared in the global scope.

---

### **2. Local Scope**

- A **local scope** is created when a function or block of code (e.g., within `{}` in an `if` statement or loop) is executed.
- Variables declared inside a function or block are only accessible within that function or block. They are not accessible from outside.

### Function Scope (a type of local scope):

```jsx
function myFunction() {
  var localVar = 'I am a local variable';
  console.log(localVar);     // Output: I am a local variable
}

myFunction();
console.log(localVar);       // Error: localVar is not defined

```

In this example:

- `localVar` is only accessible within `myFunction()` and cannot be accessed outside.

### Block Scope (using `let` and `const`):

Variables declared with `let` and `const` inside a block (e.g., `if`, `for` loop) are also limited to that block.

```jsx
if (true) {
  let blockVar = 'I am block scoped';
  console.log(blockVar);     // Output: I am block scoped
}

console.log(blockVar);       // Error: blockVar is not defined

```

In this example:

- `blockVar` is only accessible within the `if` block, thanks to `let`.

---

### **Summary**

| Scope Type | Description | Accessible From |
| --- | --- | --- |
| **Global Scope** | Declared outside functions or blocks. | Anywhere in the code. |
| **Local Scope** | Declared inside a function or block. | Only within that function or block. |
- **Global Scope** variables are accessible everywhere in the code.
- **Local Scope** (function and block scopes) variables are limited to where they are defined, helping avoid naming conflicts and making code modular.