# **Control Flow (Control Statement)**

In JavaScript, **conditional statements** control the flow of code based on whether certain conditions are true or false. They allow the program to make decisions and execute different blocks of code depending on those conditions.

Here are the main types of conditional statements in JavaScript:

---

### 1. **`if` Statement**

The `if` statement executes a block of code if a specified condition is true.

```jsx
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

```

---

### 2. **`if...else` Statement**

The `if...else` statement adds an alternative block of code to run if the condition is false.

```jsx
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

```

---

### 3. **`else if` Statement**

The `else if` statement lets you specify multiple conditions to check in sequence. If the first condition is false, it moves to the next `else if` condition.

```jsx
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

```

---

### 4. **`switch` Statement**

The `switch` statement allows for multiple possible code blocks to run based on the value of an expression. It’s often used as a cleaner alternative to multiple `if...else if` statements.

```jsx
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}

```

---

### 5. **Ternary Operator (`? :`)**

The ternary operator is a shorthand for `if...else` statements, where you choose one of two values based on a condition.

```jsx
let age = 20;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message);

```

---

These conditional statements help create flexible, decision-driven code in JavaScript, allowing you to control program flow based on dynamic inputs and conditions.