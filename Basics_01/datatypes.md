# Data Types:
Data Types are made on the basis of how data are stored and how it is accessed.

1. **Primitive Data Types**: | (Call By Value ⇒ Changes are made in Copy)
    - **String**: Represents a sequence of characters (e.g., `'Hello'`, `"World"`).
    - **Number**: Represents numeric values (e.g., `42`, `3.14`).
    - **BigInt**: Represents integers with arbitrary precision (e.g., `9007199254740991n`).
    - **Boolean**: Represents `true` or `false`.
    - **Undefined**: Represents a variable that has not been assigned a value.
    - **Null**: Represents the intentional absence of any object value.
    - **Symbol**: Represents a unique and immutable value often used for object property keys.
    
    > Total 7 Data Types in Primitive Classification.
    > 
2. **Non-Primitive (Reference) Data Type**: | (Call By Reference ⇒ Changes in the Original Values)
    - **Object**: Represents collections of key-value pairs, such as arrays, functions, and plain objects (e.g., `{ name: "John" }`).
    - **Array**
    - **Functions**

    ### **1. Primitive Data Types**

These are the most basic data types in JavaScript.

### Characteristics:

- Immutable (cannot be changed once created).
- Stored directly in memory (stack).
- Compared by **value**.

### Types:

1. **Number**: Represents numerical values, both integers and floating-point numbers.
    
    ```jsx
    let age = 25;
    let price = 99.99;
    
    ```
    
2. **String**: Represents textual data, enclosed in single (`'`) or double (`"`) quotes or backticks (`).
    
    ```jsx
    let name = "John";
    
    ```
    
3. **Boolean**: Represents `true` or `false`.
    
    ```jsx
    let isLoggedIn = true;
    
    ```
    
4. **Undefined**: A variable that has been declared but not assigned a value.
    
    ```jsx
    let x;
    console.log(x); // undefined
    
    ```
    
5. **Null**: Represents an explicitly empty or unknown value.
    
    ```jsx
    let data = null;
    
    ```
    
6. **Symbol**: Introduced in ES6, used to create unique identifiers.
    
    ```jsx
    let sym = Symbol("id");
    
    ```
    
7. **BigInt**: For numbers larger than `2^53 - 1` (safe integer limit).
    
    ```jsx
    let bigNumber = 123456789012345678901234567890n;
    
    ```
    

---

### **2. Non-Primitive Data Types**

These are complex data types, also known as **reference types**.

### Characteristics:

- Mutable (can be modified after creation).
- Stored in the heap, and a reference (pointer) is stored in memory (stack).
- Compared by **reference** (not value).

### Types:

1. **Object**: A collection of key-value pairs.
    
    ```jsx
    let person = { name: "John", age: 30 };
    
    ```
    
2. **Array**: A list-like structure to store multiple values.
    
    ```jsx
    let fruits = ["apple", "banana", "cherry"];
    
    ```
    
3. **Function**: A block of reusable code.
    
    ```jsx
    function greet() {
        console.log("Hello!");
    }
    ```
    
4. **Date**: Represents dates and times.
    
    ```jsx
    let today = new Date();
    ```
    
5. **Set and Map**: Collections introduced in ES6 for unique values and key-value pairs, respectively.
    
    ```jsx
    let set = new Set([1, 2, 3]);
    let map = new Map([["key", "value"]]);
    ```
    

---

### **Key Differences**

| **Aspect** | **Primitive Data Types** | **Non-Primitive Data Types** |
| --- | --- | --- |
| **Mutability** | Immutable | Mutable |
| **Storage** | Stored directly in stack memory | Stored in heap memory (reference) |
| **Comparison** | By value | By reference |
| **Examples** | `String`, `Number`, `Boolean` | `Object`, `Array`, `Function` |

---

### Practical Example:

```jsx
// Primitive
let x = 10;
let y = x; // Copy by value
y = 20;
console.log(x); // 10 (original value is unchanged)

// Non-Primitive
let obj1 = { key: "value" };
let obj2 = obj1; // Copy by reference
obj2.key = "new value";
console.log(obj1.key); // "new value" (original object is affected)
```

This distinction is critical for understanding how data is manipulated in JavaScript.

> When JavaScript was first created, **`null`** was mistakenly assigned to the **object** type, and it was never corrected for backwards compatibility. In JavaScript, `typeof null` returns **"object"**, which is a well-known quirk in the language.
> 

---

### String to Number

1. **Using `Number()`**:
    
    ```jsx
    let str = "123";
    let num = Number(str); // 123
    ```
    
2. **Using `parseInt()`**:
    
    ```jsx
    let str = "123";
    let num = parseInt(str); // 123
    ```
    
3. **Using `parseFloat()`**:
    
    ```jsx
    let str = "123.45";
    let num = parseFloat(str); // 123.45
    ```
    
4. **Using Unary Plus (`+`)**:
    
    ```jsx
    let str = "123";
    let num = +str; // 123
    ```
    
5. **Using `Math.floor()` (for integers)**:
    
    ```jsx
    let str = "123.45";
    let num = Math.floor(str); // 123
    ```
    
6. **Using `Math.round()` (for rounding to nearest integer)**:
    
    ```jsx
    let str = "123.67";
    let num = Math.round(str); // 124
    ```
    
7. **Using `parseInt()` with a radix (for specific base conversions)**: