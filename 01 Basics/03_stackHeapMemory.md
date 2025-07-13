# Stack and Heap memory
> In JavaScript, stack and heap memory are two areas where the language manages memory for variables and data during the execution of a program. Understanding these concepts helps clarify how JavaScript handles data storage, memory allocation, and garbage collection.

## Stack Memory:
- **Structure**: Works on a **LIFO (Last In, First Out)** basis. The last item added is the first to be removed.
    - **Definition**: A stack is a memory structure used to store **primitive values** and the execution context of function calls (e.g., local variables, function arguments).
- **Usage**:
    - Stores **primitive data types**: `undefined`, `null`, `boolean`, `number`, `bigint`, `string`, and `symbol`.
    - Holds references to objects stored in the heap.

### **Key Characteristics**:

1. **Fast access**: Memory allocation and deallocation in the stack are quick because of its linear structure.
2. **Limited size**: Stack memory is typically smaller and limited compared to heap memory.
3. **Temporary storage**: Data is cleared when the function execution is complete or the variable goes out of scope.

### **Example**:

```jsx
function add(a, b) {
  let sum = a + b; // `a`, `b`, and `sum` are stored in the stack.
  return sum;
}
add(3, 4);

```

---

### **Heap Memory**:

- **Definition**: The heap is a larger memory area used for storing **objects** and **reference types**.
- **Structure**: Unlike the stack, it is not ordered and allows dynamic memory allocation.
- **Usage**:
    - Stores **reference data types**, such as objects, arrays, and functions.

### **Key Characteristics**:

1. **Dynamic allocation**: Memory is allocated and managed dynamically as needed during runtime.
2. **Garbage collection**: The JavaScript engine (e.g., V8 in Chrome) automatically clears unused objects in the heap via garbage collection.
3. **Slower access**: Accessing data from the heap is generally slower than from the stack.

### **Example**:

```jsx
let person = { name: "Alice", age: 25 };
// The `person` object is stored in the heap.
// The `person` variable in the stack holds a reference to the heap memory location.

```

---

### **Interaction Between Stack and Heap**:

When a variable refers to an object, the variable itself (the reference) is stored in the stack, while the actual object data is stored in the heap.

### **Example**:

```jsx
function greet() {
  let message = "Hello"; // Stored in the stack
  let user = { name: "John" }; // `user` reference is in the stack, but the object is in the heap
  return `${message}, ${user.name}!`;
}
greet();

```

1. The **string** `"Hello"` is stored in the stack.
2. The **object** `{ name: "John" }` is stored in the heap, while the `user` reference is in the stack.

---

### **Key Differences**:

| **Aspect** | **Stack** | **Heap** |
| --- | --- | --- |
| **Storage** | Primitive data and references | Objects and reference data |
| **Access speed** | Faster | Slower |
| **Size** | Limited | Larger |
| **Memory cleanup** | Automatic on scope exit | Garbage collection |

---

### **Summary**:

- Stack is for simple, short-lived variables (e.g., numbers, strings, booleans).
- Heap is for complex, long-lived objects (e.g., arrays, objects).
- JavaScript’s memory management (including garbage collection) helps developers focus on coding rather than manual memory allocation.