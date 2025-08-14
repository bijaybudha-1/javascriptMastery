In JavaScript, loops are used to repeat a block of code multiple times. Here are the different types of loops:

### 1. **For Loop**

The **for loop** runs a block of code a set number of times.

```jsx
for (let i = 0; i < 5; i++) {
  console.log(i);  // Output: 0, 1, 2, 3, 4
}
```

**Explanation**:

- `let i = 0`: Initializes a variable `i`.
- `i < 5`: The condition for the loop to keep running (until `i` is less than 5).
- `i++`: Increments `i` by 1 after each iteration.

---

### 2. **While Loop**

The **while loop** runs as long as a condition is true.

```jsx
let i = 0;
while (i < 5) {
  console.log(i);  // Output: 0, 1, 2, 3, 4
  i++;  // Increment `i` inside the loop
}
```

**Explanation**:

- The loop continues as long as the condition (`i < 5`) is true.
- `i++`: Increments `i` inside the loop.

---

### 3. **Do-While Loop**

The **do-while loop** is similar to the `while` loop, but it guarantees that the block of code will run at least once, even if the condition is false initially.

```jsx
let i = 0;
do {
  console.log(i);  // Output: 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

**Explanation**:

- The code inside the `do` block runs once before checking the condition.
- Then it checks `i < 5` to decide whether to repeat.

---

### 4. **For...of Loop**

The **for...of loop** is used to iterate over elements in an array or other iterable objects.

```jsx
let arr = ['apple', 'banana', 'cherry'];
for (let fruit of arr) {
  console.log(fruit);  // Output: apple, banana, cherry
}
```

**Explanation**:

- The loop iterates over each element (`fruit`) in the array `arr`.

---

### 5. **For...in Loop**

The **for...in loop** is used to iterate over the keys (indexes) of an object or array.

```jsx
let obj = { name: 'Shubhadip', age: 20 };
for (let key in obj) {
  console.log(key + ': ' + obj[key]);  // Output: name: Shubhadip, age: 20
}
```

**Explanation**:

- The loop iterates over the keys (`name`, `age`) of the `obj` object.

---

### Summary of Loops:

| **Loop Type** | **Used For** | **Example** |
| --- | --- | --- |
| **For Loop** | Repeats a block of code a set number of times | `for (let i = 0; i < 5; i++) {}` |
| **While Loop** | Repeats as long as the condition is true | `while (i < 5) {}` |
| **Do-While Loop** | Runs at least once, checks the condition after | `do {} while (i < 5)` |
| **For...of Loop** | Iterates over values in an array or iterable | `for (let item of arr)` |
| **For...in Loop** | Iterates over keys in an object or array | `for (let key in obj)` |

Each loop has its use cases depending on the situation!