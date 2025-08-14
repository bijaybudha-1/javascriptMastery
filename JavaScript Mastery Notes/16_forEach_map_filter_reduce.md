# forEach, map, filter, reduce

JavaScript provides several powerful array methods—`forEach`, `map`, `filter`, and `reduce`—for iterating over arrays and transforming data. Here’s a breakdown of each, along with examples.

---

### 1. `forEach`

The `forEach` method executes a given function once for each array element. It’s often used when you want to perform an action on each item, such as logging or modifying data in place.

### Key Points

- Does not return a new array; returns `undefined`.
- Cannot chain `forEach` since it doesn’t return an array.
- Often used for side effects (like logging or updating external variables).

### Example

```jsx
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num * 2); // Output: 2, 4, 6, 8, 10
});

```

In this example, `forEach` logs each number in the array multiplied by 2.

---

### 2. `map`

The `map` method creates a new array by applying a given function to each element in the original array. `map` is useful when you want to transform each item and keep the results in a new array.

### Key Points

- Returns a new array of the same length.
- Commonly used for transforming data.

### Example

```jsx
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

```

Here, `map` produces a new array with each element doubled.

---

### 3. `filter`

The `filter` method creates a new array containing only the elements that meet a specified condition. It’s used when you want to include items that satisfy a given criterion.

### Key Points

- Returns a new array, potentially smaller than the original.
- Commonly used to exclude certain values.

### Example

```jsx
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

```

In this example, `filter` returns a new array with only the even numbers.

---

### 4. `reduce`

The `reduce` method iterates through the array, applying a function to accumulate each value into a single result. This method is highly versatile and can be used for a variety of operations like summing, counting, or creating objects.

### Key Points

- Returns a single value (of any type based on the logic).
- Useful for reducing an array to a single accumulated value (e.g., sum, product, object, etc.).
- Takes two arguments: a callback function and an optional initial value.

### Example: Sum of Array

```jsx
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

```

Here, `reduce` calculates the sum of all elements.

### Example: Grouping Data

```jsx
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
];

const groupedByAge = people.reduce((acc, person) => {
  (acc[person.age] = acc[person.age] || []).push(person);
  return acc;
}, {});

console.log(groupedByAge);
// Output:
// {
//   '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   '30': [{ name: 'Bob', age: 30 }]
// }

```

In this example, `reduce` groups people by age into an object, where the keys are ages and values are arrays of people with that age.

---

### Summary Table

| Method | Purpose | Returns | Use Case Example |
| --- | --- | --- | --- |
| `forEach` | Executes a function for each array element | `undefined` | Logging each item, in-place modifications |
| `map` | Transforms each item into a new array | New array | Doubling numbers, changing data format |
| `filter` | Filters items that satisfy a condition | New array | Extracting even numbers, filtering by criteria |
| `reduce` | Reduces the array to a single accumulated value | Single value | Summing, grouping, aggregating data |

These array methods allow for concise, readable, and functional data manipulation in JavaScript.