### **Math Object in JavaScript**

The **Math** object in JavaScript is a built-in object that provides a variety of mathematical functions and constants. It's not a constructor, so it cannot be instantiated. All properties and methods are static and can be accessed directly via the **Math** object.

---

### **Common Math Properties and Methods**

---

### **Math Properties**

1. **`Math.PI`**:
    - **Description**: Returns the value of Pi (π), approximately 3.14159.
    - **Example**:
        
        ```jsx
        console.log(Math.PI);  // Output: 3.141592653589793
        
        ```
        
2. **`Math.E`**:
    - **Description**: Returns Euler's number, approximately 2.71828.
    - **Example**:
        
        ```jsx
        console.log(Math.E);  // Output: 2.718281828459045
        
        ```
        
3. **`Math.LN2`**:
    - **Description**: Returns the natural logarithm of 2, approximately 0.693.
    - **Example**:
        
        ```jsx
        console.log(Math.LN2);  // Output: 0.6931471805599453
        
        ```
        
4. **`Math.LN10`**:
    - **Description**: Returns the natural logarithm of 10, approximately 2.302.
    - **Example**:
        
        ```jsx
        console.log(Math.LN10);  // Output: 2.302585092994046
        
        ```
        
5. **`Math.LOG2E`**:
    - **Description**: Returns the base-2 logarithm of E, approximately 1.442.
    - **Example**:
        
        ```jsx
        console.log(Math.LOG2E);  // Output: 1.4426950408889634
        
        ```
        
6. **`Math.LOG10E`**:
    - **Description**: Returns the base-10 logarithm of E, approximately 0.434.
    - **Example**:
        
        ```jsx
        console.log(Math.LOG10E);  // Output: 0.4342944819032518
        
        ```
        
7. **`Math.SQRT2`**:
    - **Description**: Returns the square root of 2, approximately 1.414.
    - **Example**:
        
        ```jsx
        console.log(Math.SQRT2);  // Output: 1.4142135623730951
        
        ```
        
8. **`Math.SQRT1_2`**:
    - **Description**: Returns the square root of 1/2, approximately 0.707.
    - **Example**:
        
        ```jsx
        console.log(Math.SQRT1_2);  // Output: 0.7071067811865476
        
        ```
        
9. **`Math.MAX_VALUE`**:
    - **Description**: Returns the largest possible number in JavaScript.
    - **Example**:
        
        ```jsx
        console.log(Math.MAX_VALUE);  // Output: 1.7976931348623157e+308
        
        ```
        
10. **`Math.MIN_VALUE`**:
    - **Description**: Returns the smallest positive number in JavaScript.
    - **Example**:
        
        ```jsx
        console.log(Math.MIN_VALUE);  // Output: 5e-324
        
        ```
        

---

### **Math Methods**

1. **`Math.abs(x)`**:
    - **Description**: Returns the absolute (positive) value of `x`.
    - **Example**:
        
        ```jsx
        console.log(Math.abs(-5));  // Output: 5
        console.log(Math.abs(5));   // Output: 5
        
        ```
        
2. **`Math.ceil(x)`**:
    - **Description**: Returns the smallest integer greater than or equal to `x`.
    - **Example**:
        
        ```jsx
        console.log(Math.ceil(4.3));  // Output: 5
        console.log(Math.ceil(9.01)); // Output: 10
        
        ```
        
3. **`Math.floor(x)`**:
    - **Description**: Returns the largest integer less than or equal to `x`.
    - **Example**:
        
        ```jsx
        console.log(Math.floor(4.3));  // Output: 4
        console.log(Math.floor(9.9));  // Output: 9
        
        ```
        
4. **`Math.round(x)`**:
    - **Description**: Returns the value of `x` rounded to the nearest integer.
    - **Example**:
        
        ```jsx
        console.log(Math.round(4.3));  // Output: 4
        console.log(Math.round(4.7));  // Output: 5
        
        ```
        
5. **`Math.random()`**:
    - **Description**: Returns a random floating-point number between `0` (inclusive) and `1` (exclusive).
    - **Example**:
        
        ```jsx
        console.log(Math.random());  // Output: A random number between 0 and 1
        
        ```
        
6. **`Math.max(...values)`**:
    - **Description**: Returns the largest of the given values.
    - **Example**:
        
        ```jsx
        console.log(Math.max(1, 5, 3));  // Output: 5
        
        ```
        
7. **`Math.min(...values)`**:
    - **Description**: Returns the smallest of the given values.
    - **Example**:
        
        ```jsx
        console.log(Math.min(1, 5, 3));  // Output: 1
        
        ```
        
8. **`Math.pow(base, exponent)`**:
    - **Description**: Returns the base raised to the power of the exponent.
    - **Example**:
        
        ```jsx
        console.log(Math.pow(2, 3));  // Output: 8
        console.log(Math.pow(5, 2));  // Output: 25
        
        ```
        
9. **`Math.sqrt(x)`**:
    - **Description**: Returns the square root of `x`.
    - **Example**:
        
        ```jsx
        console.log(Math.sqrt(25));  // Output: 5
        console.log(Math.sqrt(9));   // Output: 3
        
        ```
        
10. **`Math.sin(x)`**:
    - **Description**: Returns the sine of `x` (x is in radians).
    - **Example**:
        
        ```jsx
        console.log(Math.sin(Math.PI / 2));  // Output: 1
        
        ```
        
11. **`Math.cos(x)`**:
    - **Description**: Returns the cosine of `x` (x is in radians).
    - **Example**:
        
        ```jsx
        console.log(Math.cos(Math.PI));  // Output: -1
        
        ```
        
12. **`Math.tan(x)`**:
    - **Description**: Returns the tangent of `x` (x is in radians).
    - **Example**:
        
        ```jsx
        console.log(Math.tan(Math.PI / 4));  // Output: 1
        
        ```
        
13. **`Math.log(x)`**:
    - **Description**: Returns the natural logarithm (base `e`) of `x`.
    - **Example**:
        
        ```jsx
        console.log(Math.log(Math.E));  // Output: 1
        
        ```
        
14. **`Math.log10(x)`**:
    - **Description**: Returns the base-10 logarithm of `x`.
    - **Example**:
        
        ```jsx
        console.log(Math.log10(100));  // Output: 2
        
        ```
        
15. **`Math.log2(x)`**:
    - **Description**: Returns the base-2 logarithm of `x`.
    - **Example**:
        
        ```jsx
        console.log(Math.log2(8));  // Output: 3
        
        ```
        

---

### **Example of Using Math Methods and Properties**

```jsx
let num1 = -12;
let num2 = 4.6;
let num3 = 16;

// Absolute value of a negative number
console.log(Math.abs(num1));  // Output: 12

// Round a decimal number
console.log(Math.round(num2));  // Output: 5

// Square root of a number
console.log(Math.sqrt(num3));  // Output: 4

// Generating a random number
let randomNum = Math.random() * 10;
console.log(randomNum);  // Output: A random number between 0 and 10

// Power of a number
console.log(Math.pow(2, 3));  // Output: 8

// Maximum of numbers
console.log(Math.max(10, 20, 5));  // Output: 20

// Minimum of numbers
console.log(Math.min(10, 20, 5));  // Output: 5

```

---
### Summary of Math Methods and Properties
| **Method/Property**        | **Description**                                                     | **Example**                     |
| -------------------------- | ------------------------------------------------------------------- | ------------------------------- |
| `Math.PI`                  | Value of Pi                                                         | `Math.PI` → `3.141592653589793` |
| `Math.E`                   | Euler's number                                                      | `Math.E` → `2.718281828459045`  |
| `Math.abs(x)`              | Returns the absolute (positive) value of `x`                        | `Math.abs(-5)` → `5`            |
| `Math.ceil(x)`             | Rounds `x` **up** to the nearest integer                            | `Math.ceil(4.3)` → `5`          |
| `Math.floor(x)`            | Rounds `x` **down** to the nearest integer                          | `Math.floor(4.7)` → `4`         |
| `Math.round(x)`            | Rounds `x` to the nearest integer                                   | `Math.round(4.5)` → `5`         |
| `Math.random()`            | Returns a random number between `0` (inclusive) and `1` (exclusive) | `Math.random()` → `0.12345`     |
| `Math.max(...values)`      | Returns the largest value among the given numbers                   | `Math.max(1, 3, 2)` → `3`       |
| `Math.min(...values)`      | Returns the smallest value among the given numbers                  | `Math.min(1, 3, 2)` → `1`       |
| `Math.pow(base, exponent)` | Returns `base` raised to the power of `exponent`                    | `Math.pow(2, 3)` → `8`          |
| `Math.sqrt(x)`             | Returns the square root of `x`                                      | `Math.sqrt(9)` → `3`            |
| `Math.sin(x)`              | Returns the sine of `x` (in radians)                                | `Math.sin(Math.PI / 2)` → `1`   |
| `Math.cos(x)`              | Returns the cosine of `x` (in radians)                              | `Math.cos(Math.PI)` → `-1`      |
