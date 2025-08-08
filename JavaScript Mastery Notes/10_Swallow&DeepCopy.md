# Swallow & Deep Copy

- **Shallow Copy**: A copy of an object or array where only the top-level elements are copied. Nested objects or arrays are still linked to the original.
- **Deep Copy**: A copy of an object or array where all elements, including nested objects or arrays, are copied, so the original and the copy are completely separate.

### **1. Shallow Copy Example (Array)**

A **shallow copy** means that only the **top-level** values (elements) are copied. If the array contains other arrays or objects inside it, the copy will still point to the same inner array or object.

### Example of Shallow Copy:

```jsx
let originalArray = [1, 2, [3, 4]];

// Creating a shallow copy using the spread operator
let shallowCopy = [...originalArray];

// Changing the inner array in the shallow copy
shallowCopy[2][0] = 99;

console.log(originalArray[2][0]);  // Output: 99 (original array is also affected)
console.log(shallowCopy[2][0]);    // Output: 99 (shallow copy is affected)

```

**Explanation**:

- Both `originalArray` and `shallowCopy` point to the **same inner array** `[3, 4]`.
- So when we change `shallowCopy[2][0]` to `99`, it also changes `originalArray[2][0]`, because both share the same inner array.

---

### **2. Deep Copy Example (Object)**

A **deep copy** means that both the **top-level** and **inner values** (like objects or arrays inside the object) are copied. They are completely separate, so changes in the copy do not affect the original.

### Example of Deep Copy:

```jsx
let originalObject = {
  name: 'Shubhadip',
  address: { city: 'Kolkata', zip: 700001 }
};

// Creating a deep copy using JSON methods
let deepCopy = JSON.parse(JSON.stringify(originalObject));

// Changing the inner object in the deep copy
deepCopy.address.city = 'Mumbai';

console.log(originalObject.address.city);  // Output: 'Kolkata' (original is not affected)
console.log(deepCopy.address.city);        // Output: 'Mumbai' (deep copy is changed)

```

**Explanation**:

- `originalObject` and `deepCopy` are **completely separate**.
- Changing `deepCopy.address.city` to 'Mumbai' does **not** change `originalObject.address.city`, because they are different objects in memory.

---

### **Summary**:

- **Shallow Copy**: Copies the top-level elements. If there are nested objects or arrays, both the original and copy will point to the same ones.
- **Deep Copy**: Copies everything, including nested objects or arrays. The original and copy are completely separate.