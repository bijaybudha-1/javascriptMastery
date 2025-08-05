# 📄 JavaScript Number
### 📘 Introduction
In JavaScript, numbers are a primitive data type. JavaScript handles both integers and floating-point numbers using the `Number` type. Additionally, JavaScript provides a `Number` object which includes several useful methods for formatting and working with numerical values.

### Number Declaration
```javascript
const num = 400;                  // Primitive number
const balance = new Number(100);  // Number object
```
- Primitive numbers are most commonly used.
- **`new Number()`** creates a wrapper object around the number which allows access to number-specific methods.

## Common Number Methods
#### 1. toFixed()
**Purpose:**
Formats a number using fixed-point notation. It sets the number of digits after the decimal point.
```javascript
const price = 45.6789;
console.log(price.toFixed(2));  // Output: "45.68"
```
- Useful for financial or currency values.
- Always returns a string.

#### 2. toPrecision()
**Purpose:**
Formats a number to a specified length (significant digits). It can return either exponential or fixed-point format based on the number.
```javascript
const value = 123.456;
console.log(value.toPrecision(4));  // Output: "123.5"
```
- Rounds the number to the given number of total digits.
- Useful when consistent precision is required.

#### 3. toLocaleString()
**Purpose:**
Converts a number into a string with language-sensitive formatting (e.g., comma separators).
```javascript
const population = 73847302;
console.log(population.toLocaleString());          // Output: "73,847,302"
console.log(population.toLocaleString("en-IN"));   // Output: "7,38,47,302"
```
- Enhances readability of large numbers.
- Locales like "en-US" or "en-IN" can be used for specific formatting styles.

#### 4. toString()
**Purpose:**
Returns a string representing the specified number in the given base (radix).
```javascript
const year = 2025;
console.log(year.toString());     // Output: "2025"
console.log(year.toString(2));    // Output: "11111101001" (binary)
```
- Converts number to a string.
- Optionally converts number to another base (binary, hexadecimal, etc.).

### 📌Additional Useful Number Functions
| Function | Description |	Example |
|---|---|---|
| Number.isInteger(10) |	Checks if a value is an integer | true |
|Number.parseFloat("10.25") | Parses a string and returns a floating number | 10.25 |
|Number.parseInt("25.89") | Parses a string and returns an integer | 25 |

### Summary Table
| Method / Function           | Description                     | Example Output             |
| --------------------------- | ------------------------------- | -------------------------- |
| `toFixed(2)`                | Formats with 2 decimal places   | `45.678 → "45.68"`         |
| `toPrecision(4)`            | Formats to 4 significant digits | `123.456 → "123.5"`        |
| `toLocaleString("en-IN")`   | Adds commas (Indian format)     | `73847302 → "7,38,47,302"` |
| `toString()`                | Converts to string              | `2025 → "2025"`            |
| `Number.parseFloat("10.5")` | Parses string to float          | `"10.5" → 10.5`            |
| `Number.parseInt("20.99")`  | Parses string to integer        | `"20.99" → 20`             |
| `Number.isInteger(5.1)`     | Checks if value is integer      | `false`                    |
