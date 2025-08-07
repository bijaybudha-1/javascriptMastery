# Objects

> In JavaScript, **objects** are collections of properties, where each property has a key (also known as a "name") and a value. Objects allow you to store related data and functionality together in a structured way, making them one of the most important and flexible types in JavaScript.
> 

### 1. **Creating an Object**

You can create an object using curly braces `{}` and define key-value pairs within.

```jsx
let person = {
  name: "Ravi",
  age: 30,
  isStudent: false
};
```

In this example, `person` is an object with three properties: `name`, `age`, and `isStudent`.

### 2. **Accessing Object Properties**

You can access properties in two ways:

- **Dot notation**: `objectName.property`
- **Bracket notation**: `objectName["property"]`

```jsx
console.log(person.name);      // Output: Ravi
console.log(person["age"]);    // Output: 30
```

### 3. **Adding or Modifying Properties**

You can add or update properties using dot notation or bracket notation.

```jsx
person.city = "Delhi";          // Adds new property 'city'
person.age = 31;                // Updates 'age' property
console.log(person.city);       // Output: Delhi
console.log(person.age);        // Output: 31
```

### 4. **Deleting Properties**

You can remove a property using the `delete` keyword.

```jsx
delete person.isStudent;
console.log(person.isStudent);  // Output: undefined
```

### 5. **Methods in Objects**

Objects can have methods, which are functions that belong to an object. Define a method using a function inside the object.

```jsx
let car = {
  brand: "Toyota",
  model: "Camry",
  start: function() {
    console.log("The car has started.");
  }
};

car.start();  // Output: The car has started.
```

### 6. **`this` Keyword**

Inside an object’s method, `this` refers to the object itself, allowing methods to access other properties within the object.

```jsx
let book = {
  title: "JavaScript Basics",
  author: "Anita",
  getSummary: function() {
    return `${this.title} by ${this.author}`;
  }
};

console.log(book.getSummary());  // Output: JavaScript Basics by Anita
```

### 7. **Nested Objects**

Objects can contain other objects as values for their properties.

```jsx
let student = {
  name: "Arjun",
  grade: 12,
  address: {
    street: "123 Main St",
    city: "Mumbai"
  }
};

console.log(student.address.city);  // Output: Mumbai
```

### 8. **Iterating Over Object Properties**

You can use a `for...in` loop to iterate over an object’s properties.

```jsx
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

### 9. **Object Methods and Properties**

JavaScript provides several useful methods for objects, including:

- **`Object.keys(obj)`**: Returns an array of keys.
- **`Object.values(obj)`**: Returns an array of values.
- **`Object.entries(obj)`**: Returns an array of key-value pairs.

```jsx
let colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };
console.log(Object.keys(colors));    // Output: ["red", "green", "blue"]
console.log(Object.values(colors));  // Output: ["#FF0000", "#00FF00", "#0000FF"]
console.log(Object.entries(colors)); // Output: [["red", "#FF0000"], ["green", "#00FF00"], ["blue", "#0000FF"]]
```

Objects are powerful in JavaScript because they allow you to group and organize data and methods, making your code more structured and efficient.

---

In JavaScript, `Object.freeze()` and `Object.seal()` are two methods used to control the mutability of objects. Both methods restrict changes to objects in different ways.

### 1. **`Object.freeze()`**

- **Purpose**: Prevents any modifications to an object.
- **Properties**: You cannot add, delete, or modify existing properties.
- **Prototype**: Also prevents changing the prototype of the object.
- **Immutability**: Completely immutable – any attempts to change the object will fail silently (or throw an error in strict mode).

### Example:

```jsx
const person = {
  name: "Anjali",
  age: 25
};

Object.freeze(person);

person.age = 30;          // This will have no effect
person.city = "Mumbai";   // Cannot add new properties
delete person.name;       // Cannot delete properties

console.log(person);      // Output: { name: "Anjali", age: 25 }

```

### 2. **`Object.seal()`**

- **Purpose**: Prevents adding or deleting properties but allows modifying existing properties.
- **Properties**: Existing properties can be modified but not removed or added.
- **Prototype**: Prevents changing the prototype.
- **Immutability**: Partially immutable – properties can still be modified as long as they already exist.

### Example:

```jsx
const car = {
  brand: "Honda",
  model: "Civic"
};

Object.seal(car);

car.model = "Accord";    // Allowed: Existing property modified
car.year = 2020;         // Not allowed: Cannot add new properties
delete car.brand;        // Not allowed: Cannot delete properties

console.log(car);        // Output: { brand: "Honda", model: "Accord" }

```

### Summary Table

| Feature | `Object.freeze()` | `Object.seal()` |
| --- | --- | --- |
| Can add new properties | ✘ No | ✘ No |
| Can delete properties | ✘ No | ✘ No |
| Can modify existing properties | ✘ No | ✔ Yes |
| Can change prototype | ✘ No | ✘ No |
| Use case | Complete immutability | Partial immutability |

In short, `Object.freeze()` fully locks an object down, while `Object.seal()` allows for some flexibility by letting you modify existing properties but not add or delete them.

---

Object destructuring is a convenient syntax in JavaScript that allows you to extract properties from objects and assign them to variables in a single statement. It makes your code more concise and readable.

## **1. Basic Syntax**

The syntax involves enclosing the properties you want to extract in curly braces `{}` and matching them with the object's keys.

### **Example:**

```jsx
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
};

// Destructuring
const { name, age } = person;

console.log(name); // Output: John Doe
console.log(age);  // Output: 30

```

Here, `name` and `age` are variables created and assigned values from the `person` object.

---

## **2. Renaming Variables**

You can rename variables while destructuring using the `:` syntax.

### **Example:**

```jsx
const person = {
  name: "John Doe",
  age: 30,
};

const { name: fullName, age: years } = person;

console.log(fullName); // Output: John Doe
console.log(years);     // Output: 30

```

---

## **3. Default Values**

You can assign default values to variables in case the property doesn't exist in the object.

### **Example:**

```jsx
const person = {
  name: "John Doe",
};

const { name, age = 25 } = person;

console.log(name); // Output: John Doe
console.log(age);  // Output: 25 (default value)

```

---

## **4. Nested Object Destructuring**

You can destructure nested properties by following the object structure.

### **Example:**

```jsx
const person = {
  name: "John Doe",
  address: {
    city: "New York",
    country: "USA",
  },
};

const { address: { city, country } } = person;

console.log(city);    // Output: New York
console.log(country); // Output: USA

```

---

## **5. Using Rest Syntax**

You can use the rest syntax `...` to collect remaining properties into another object.

### **Example:**

```jsx
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
};

const { name, ...rest } = person;

console.log(name); // Output: John Doe
console.log(rest); // Output: { age: 30, occupation: 'Developer' }

```

---

## **6. Destructuring in Function Parameters**

You can destructure objects directly in function parameters, making it easier to access values without referencing the object repeatedly.

### **Example:**

```jsx
const person = {
  name: "John Doe",
  age: 30,
};

function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet(person); // Output: Hello, my name is John Doe and I am 30 years old.

```

---

## **7. Dynamic Property Keys**

You can use dynamic property keys during destructuring by using computed property names.

### **Example:**

```jsx
const key = "name";
const person = {
  name: "John Doe",
  age: 30,
};

const { [key]: value } = person;

console.log(value); // Output: John Doe

```

---

### **Benefits of Object Destructuring**

- Cleaner and more concise syntax.
- Reduces repetitive code when accessing object properties.
- Helps extract only the needed data, improving readability.

Let me know if you'd like exercises or more examples!