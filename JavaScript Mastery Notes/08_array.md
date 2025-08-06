# Arrays

In JavaScript, an **array** is a data structure that allows you to store a collection of values in a single variable. These values can be of any data type (numbers, strings, objects, other arrays, etc.). Arrays are commonly used to hold lists of items or related data that can be accessed by their index.

### 1. **Creating an Array**

You can create an array in two main ways:

- **Using square brackets `[]`** (most common):
    
    ```jsx
    let fruits = ["apple", "banana", "orange"];
    
    ```
    
- **Using the `Array` constructor**:
    
    ```jsx
    let numbers = new Array(1, 2, 3, 4);
    
    ```
    

### 2. **Accessing Array Elements**

Array elements are accessed using their index, which starts from `0`.

```jsx
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"

```

### 3. **Modifying Array Elements**

You can modify an element by assigning a new value to it using its index.

```jsx
fruits[1] = "mango";
console.log(fruits); // Output: ["apple", "mango", "orange"]

```

JavaScript arrays come with several properties and methods for easy manipulation:

### 4. Array Methods & Properties

In JavaScript, arrays have numerous built-in methods to handle and manipulate data. Here's a breakdown of some of the most commonly used array methods with examples:

---

### 1. **`push()`**

Adds one or more elements to the end of an array and returns the new length.

```jsx
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "orange"]

```

### 2. **`pop()`**

Removes the last element from an array and returns that element.

```jsx
fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]

```

### 3. **`shift()`**

Removes the first element from an array and returns that element.

```jsx
fruits.shift();
console.log(fruits); // Output: ["banana"]

```

### 4. **`unshift()`**

Adds one or more elements to the beginning of an array and returns the new length.

```jsx
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "banana"]

```

### 5. **`concat()`**

Merges two or more arrays and returns a new array.

```jsx
let vegetables = ["carrot", "broccoli"];
let food = fruits.concat(vegetables);
console.log(food); // Output: ["kiwi", "banana", "carrot", "broccoli"]

```

### 6. **`slice()`**

Returns a shallow copy of a portion of an array into a new array, based on start and end index (end not included).

```jsx
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 3);
console.log(sliced); // Output: [2, 3]

```

### 7. **`splice()`**

Adds/removes elements in an array and returns the removed elements.

```jsx
numbers.splice(2, 1, 10); // At index 2, remove 1 item and add 10
console.log(numbers); // Output: [1, 2, 10, 4, 5]

```

### 8. **`indexOf()`**

Returns the first index at which a specified element is found, or -1 if not found.

```jsx
console.log(numbers.indexOf(10)); // Output: 2

```

### 9. **`lastIndexOf()`**

Returns the last index at which a specified element is found, or -1 if not found.

```jsx
let items = [1, 2, 3, 2];
console.log(items.lastIndexOf(2)); // Output: 3

```

### 10. **`includes()`**

Determines if an array contains a specified element, returning `true` or `false`.

```jsx
console.log(items.includes(3)); // Output: true

```

### 11. **`join()`**

Joins all elements of an array into a string with a specified separator.

```jsx
console.log(items.join("-")); // Output: "1-2-3-2"

```

### 12. **`reverse()`**

Reverses the order of elements in an array in place.

```jsx
items.reverse();
console.log(items); // Output: [2, 3, 2, 1]

```

### 13. **`sort()`**

Sorts the elements of an array in place and returns the sorted array.

```jsx
let names = ["Anu", "Ravi", "Meena"];
names.sort();
console.log(names); // Output: ["Anu", "Meena", "Ravi"]

```

### 14. **`forEach()`**

Executes a provided function once for each array element.

```jsx
names.forEach((name) => console.log(name));
// Output:
// Anu
// Meena
// Ravi

```

### 15. **`map()`**

Creates a new array populated with the results of calling a provided function on every element.

```jsx
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [4, 6, 4, 2]

```

### 16. **`filter()`**

Creates a new array with elements that pass the test implemented by the provided function.

```jsx
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [4, 2]

```

### 17. **`reduce()`**

Applies a function against an accumulator and each element in the array, reducing it to a single value.

```jsx
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 16

```

### 18. **`reduceRight()`**

Similar to `reduce()` but processes the array elements in reverse order.

```jsx
let sumRight = numbers.reduceRight((acc, num) => acc + num, 0);
console.log(sumRight); // Output: 16

```

### 19. **`some()`**

Tests whether at least one element in the array passes the test.

```jsx
console.log(numbers.some(num => num > 3)); // Output: true

```

### 20. **`every()`**

Tests whether all elements in the array pass the test.

```jsx
console.log(numbers.every(num => num > 0)); // Output: true

```

### 21. **`find()`**

Returns the first element that satisfies the test, or `undefined` if no elements satisfy the test.

```jsx
console.log(numbers.find(num => num > 3)); // Output: 4

```

### 22. **`findIndex()`**

Returns the index of the first element that satisfies the test, or `-1` if no elements satisfy the test.

```jsx
console.log(numbers.findIndex(num => num > 3)); // Output: 3

```

### 23. **`fill()`**

Fills all elements in an array with a static value, from a start index to an end index (not inclusive).

```jsx
let filled = new Array(5).fill(0);
console.log(filled); // Output: [0, 0, 0, 0, 0]

```

### 24. **`copyWithin()`**

Copies part of an array to another location in the same array, without changing its length.

```jsx
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // Output: [4, 5, 3, 4, 5]

```

### 25. **`flat()`**

Flattens a nested array by a specified depth.

```jsx
let nestedArr = [1, [2, [3, 4], 5]];
console.log(nestedArr.flat(2)); // Output: [1, 2, 3, 4, 5]

```

### 26. **`flatMap()`**

Maps each element using a mapping function, then flattens the result.

```jsx
let numArr = [1, 2, 3];
let doubledArr = numArr.flatMap(n => [n * 2]);
console.log(doubledArr); // Output: [2, 4, 6]

```

---

These methods give JavaScript arrays great flexibility, enabling easy data management, transformation, and manipulation.

### 5. **Looping Through an Array**

You can loop through array elements using loops like `for`, `for...of`, `forEach`, etc.

```jsx
// Using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(function(fruit) {
  console.log(fruit);
});

```

### 6. **Nested Arrays**

Arrays can contain other arrays, creating a nested or multidimensional array.

```jsx
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6

```

### 7. **Common Array Methods**

- **`.slice()`**: Returns a portion of the array.
- **`.splice()`**: Adds/removes elements in an array.
- **`.concat()`**: Merges arrays.
- **`.join()`**: Converts array elements to a string.
- **`.map()`**: Creates a new array by applying a function to each element.
- **`.filter()`**: Creates a new array with elements that pass a condition.
- **`.reduce()`**: Reduces the array to a single value.

```jsx
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

```

Arrays in JavaScript are powerful and versatile, allowing you to handle large sets of data efficiently. They come with built-in methods for manipulation, making them essential for dynamic and complex data management in web applications.

---

> A **multidimensional array** in JavaScript is essentially an array of arrays, which allows you to represent data in multiple dimensions (e.g., 2D, 3D). It’s commonly used for storing complex data, like a table (2D array) or grid.
> 

### 1. **Creating a Multidimensional Array**

### 2D Array (Grid/Table)

A 2D array is an array where each element is itself an array, forming a matrix or table.

```jsx
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // Output: 1 (first row, first column)
console.log(matrix[1][2]); // Output: 6 (second row, third column)

```

In this example:

- `matrix[0]` represents the first row `[1, 2, 3]`
- `matrix[1][2]` accesses the second row, third column value, which is `6`

### 3D Array

A 3D array is an array of 2D arrays, adding another layer of nesting.

```jsx
let cube = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [
    [7, 8, 9],
    [10, 11, 12]
  ]
];

console.log(cube[0][1][2]); // Output: 6

```

In this example:

- `cube[0]` refers to the first 2D array `[[1, 2, 3], [4, 5, 6]]`
- `cube[0][1]` is the second row `[4, 5, 6]`
- `cube[0][1][2]` accesses the third element of the second row in the first 2D array, which is `6`

### 2. **Iterating Through Multidimensional Arrays**

To loop through elements in a multidimensional array, use nested loops. For example, iterating over a 2D array:

```jsx
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]); // Access each element
  }
}

```

### 3. **Modifying Elements**

You can directly access and modify elements in a multidimensional array by specifying the indices.

```jsx
matrix[1][1] = 15;
console.log(matrix[1]); // Output: [4, 15, 6]

```

### 4. **Real-World Use Case**

A 2D array can represent a table of data, like a chessboard, grid, or spreadsheet:

```jsx
let chessboard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];
console.log(chessboard[0][0]); // Output: "R" (white rook)

```

### Summary

Multidimensional arrays are helpful for organizing complex data structures, like matrices, 3D models, or tables, and can be accessed and modified by specifying the row and column indices.

Here is a table listing **mutable** and **immutable** methods of JavaScript arrays:

| **Category** | **Mutable Methods** | **Immutable Methods** | **Description** |
| --- | --- | --- | --- |
| **Adding Elements** | `push()`, `unshift()`, `splice()` | `concat()`, `map()`, `filter()` | Mutable methods modify the array itself; immutable methods return a new array. |
| **Removing Elements** | `pop()`, `shift()`, `splice()` | `filter()` | Mutable methods change the array; immutable methods return a filtered array. |
| **Sorting/Reversing** | `sort()`, `reverse()` | `slice()`, `toSorted()` | `sort()` and `reverse()` modify the array; `toSorted()` creates a new sorted array. |
| **Updating Elements** | Direct assignment via index (e.g., `arr[0] = value`) | `map()`, `reduce()` | Direct updates change the array; `map()` returns a new array with changes. |
| **Iterating/Accessing** | No direct mutations (e.g., `forEach()`) | `map()`, `filter()`, `reduce()`, `slice()` | These methods do not modify the array; instead, they work on the data and return new arrays. |
| **Merging Arrays** | `splice()` | `concat()` | `splice()` can merge arrays by modifying the original; `concat()` merges without modifying. |
| **Extracting Subarrays** | `splice()` | `slice()`, `flatMap()` | `splice()` mutates; `slice()` and `flatMap()` create new arrays. |

### Key Points:

- **Mutable Methods:** Modify the original array directly.
- **Immutable Methods:** Do not change the original array and return a new array or result.

Let me know if you'd like examples of these methods!