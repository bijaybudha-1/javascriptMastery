# String

A string is **a sequence of one or more characters that may consist of letters, numbers, or symbols**. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.

### **String Methods & Properties in JavaScript**

In JavaScript, strings are primitive data types, and they come with several **methods** and **properties** that allow you to manipulate, query, and transform them. Here's a comprehensive overview:

---

### **String Properties**

1. **`length`**:
    - **Description**: Returns the number of characters in a string.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.length);  // Output: 13
        
        ```
        

---

### **String Methods**

1. **`charAt(index)`**:
    - **Description**: Returns the character at a specified index.
    - **Example**:
        
        ```jsx
        let str = "Hello";
        console.log(str.charAt(1));  // Output: "e"
        
        ```
        
2. **`charCodeAt(index)`**:
    - **Description**: Returns the Unicode value (character code) of the character at the specified index.
    - **Example**:
        
        ```jsx
        let str = "Hello";
        console.log(str.charCodeAt(1));  // Output: 101 (Unicode value of "e")
        
        ```
        
3. **`concat(str2, str3, ...)`**:
    - **Description**: Combines multiple strings into one.
    - **Example**:
        
        ```jsx
        let str1 = "Hello";
        let str2 = " World!";
        console.log(str1.concat(str2));  // Output: "Hello World!"
        
        ```
        
4. **`includes(searchString)`**:
    - **Description**: Returns `true` if the string contains the specified substring, otherwise `false`.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.includes("World"));  // Output: true
        
        ```
        
5. **`indexOf(searchString)`**:
    - **Description**: Returns the first index at which the specified substring is found, or `1` if not found.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.indexOf("World"));  // Output: 7
        
        ```
        
6. **`replace(searchValue, newValue)`**:
    - **Description**: Replaces the first occurrence of a substring with a new substring.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.replace("World", "JavaScript"));  // Output: "Hello, JavaScript!"
        
        ```
        
7. **`slice(start, end)`**:
    - **Description**: Extracts a portion of a string from the `start` index up to (but not including) the `end` index.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.slice(7, 12));  // Output: "World"
        
        ```
        
8. **`split(separator)`**:
    - **Description**: Splits a string into an array of substrings based on the specified separator.
    - **Example**:
        
        ```jsx
        let str = "apple,banana,orange";
        let fruits = str.split(",");
        console.log(fruits);  // Output: ["apple", "banana", "orange"]
        
        ```
        
9. **`toLowerCase()`**:
    - **Description**: Converts all characters in the string to lowercase.
    - **Example**:
        
        ```jsx
        let str = "HELLO";
        console.log(str.toLowerCase());  // Output: "hello"
        
        ```
        
10. **`toUpperCase()`**:
    - **Description**: Converts all characters in the string to uppercase.
    - **Example**:
        
        ```jsx
        let str = "hello";
        console.log(str.toUpperCase());  // Output: "HELLO"
        
        ```
        
11. **`trim()`**:
    - **Description**: Removes whitespace from both ends of the string.
    - **Example**:
        
        ```jsx
        let str = "   Hello, World!   ";
        console.log(str.trim());  // Output: "Hello, World!"
        
        ```
        
12. **`startsWith(searchString)`**:
    - **Description**: Checks if the string starts with the specified substring, returns `true` or `false`.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.startsWith("Hello"));  // Output: true
        
        ```
        
13. **`endsWith(searchString)`**:
    - **Description**: Checks if the string ends with the specified substring, returns `true` or `false`.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.endsWith("World!"));  // Output: true
        
        ```
        
14. **`repeat(count)`**:
    - **Description**: Returns a new string repeated the specified number of times.
    - **Example**:
        
        ```jsx
        let str = "Hello";
        console.log(str.repeat(3));  // Output: "HelloHelloHello"
        
        ```
        
15. **`search(regexp)`**:
    - **Description**: Executes a regular expression search on the string and returns the index of the first match, or `1` if no match is found.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.search("World"));  // Output: 7
        
        ```
        
16. **`substring(start, end)`**:
    - **Description**: Returns a portion of the string between `start` and `end` indices.
    - **Example**:
        
        ```jsx
        let str = "Hello, World!";
        console.log(str.substring(7, 12));  // Output: "World"
        
        ```
        
17. **`toString()`**:
    - **Description**: Returns the string representation of an object. This is implicitly called when the object is used as a string.
    - **Example**:
        
        ```jsx
        let num = 100;
        let str = num.toString();
        console.log(str);  // Output: "100"
        
        ```
        
18. **`valueOf()`**:
    - **Description**: Returns the primitive value of a string object (similar to `toString()`).
    - **Example**:
        
        ```jsx
        let str = new String("Hello");
        console.log(str.valueOf());  // Output: "Hello"
        
        ```
        

---

### Example of Using String Methods:

```jsx
let greeting = "  Hello, World!  ";

// Using trim() to remove extra spaces
let trimmedGreeting = greeting.trim();
console.log(trimmedGreeting);  // Output: "Hello, World!"

// Using toLowerCase() to convert to lowercase
let lowerGreeting = trimmedGreeting.toLowerCase();
console.log(lowerGreeting);  // Output: "hello, world!"

// Using replace() to change "hello" to "hi"
let newGreeting = lowerGreeting.replace("hello", "hi");
console.log(newGreeting);  // Output: "hi, world!"

// Using split() to create an array from the string
let words = newGreeting.split(" ");
console.log(words);  // Output: ["hi,", "world!"]

```

---

### Summary of Common String Methods and Properties:

| **Method/Property** | **Description** | **Example** |
| --- | --- | --- |
| `length` | Returns the length of the string | `"Hello".length` → `5` |
| `charAt(index)` | Returns the character at the specified index | `"Hello".charAt(0)` → `"H"` |
| `indexOf(substring)` | Returns the first index of the specified substring | `"Hello".indexOf("l")` → `2` |
| `includes(substring)` | Checks if the string contains the specified substring | `"Hello".includes("ll")` → `true` |
| `replace(search, replace)` | Replaces the first occurrence of a substring with another substring | `"Hello".replace("l", "L")` → `"HeLlo"` |
| `slice(start, end)` | Extracts a section of a string and returns it as a new string | `"Hello".slice(0, 3)` → `"Hel"` |
| `split(separator)` | Splits the string into an array of substrings based on the separator | `"apple,banana".split(",")` → `["apple", "banana"]` |
| `toLowerCase()` | Converts the string to lowercase | `"HELLO".toLowerCase()` → `"hello"` |
| `toUpperCase()` | Converts the string to uppercase | `"hello".toUpperCase()` → `"HELLO"` |
| `trim()` | Removes whitespace from both ends of the string | `"  Hello  ".trim()` → `"Hello"` |

These string methods and properties are essential for manipulating and working with strings in JavaScript effectively.