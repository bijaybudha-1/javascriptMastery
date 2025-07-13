# Introduction to JavaScript Variables
> In JavaScript, a variable is a container for storing data values. Variables allow you to store information that can be used and manipulated throughout your code.


```js
// javaScript Variable
let name = "Bijay Budha"
let isStudent = true;
```
`let` cannot be re-declared in the same scope, but they can be reassigned.

## Summary of `let` in JavaScript
- Reassignment Allowed: You can reassign a `let` variable, meaning you can change its value after the initial assignment.
```js
let num1 = 10;
num1 = 20; // Allowed
```
- No Redeclaration in Same Scope: You cannot declare the same `let` variable twice within the same scope. Attempting to do so will throw an error.
```js
let y = 20;
let y = 30;  // SyntaxError: Identifier 'y' has already been declared
```
- Block-Scoped: `let` is confined to the block `{}` where it’s declared, making it accessible only within that block (such as within an `if` statement or a loop).
```js
if (true) {
    let z = 15;
    console.log(z);  // Output: 15
}
console.log(z);  // ReferenceError: z is not defined
```
- Not Hoisted in the Same Way as `var`: Although `let` is technically hoisted, it remains in a "temporal dead zone" until its declaration is reached, meaning it cannot be accessed before declaration.
```js
console.log(a);  // ReferenceError: Cannot access 'a' before initialization
let a = 10;
```
In short, `let` is suitable for variables whose values may change and provides a more predictable, block-scoped behavior than `var`, reducing unintended errors in code.

### Summary of `const`
- **Cannot be reassigned**: The variable reference is fixed.
- **Must be initialized**: Requires an initial value at declaration.
- **Block-scoped**: Only accessible within the block `{}` it is declared in.
- **Mutable contents for objects and arrays**: You can modify the properties of an object or the elements of an array but cannot reassign the whole object or array.
---
Here's a concise comparison of `let`,
`var`, and `const` in JavaScript:
| Feature | var | let | const |
|---------|-----|-----|-------|
|Scope    |Function-scoped | Block-scoped | Block-scoped |
| Hoisting | Hoisted, initialized as `undefined` | Hoisted, in "temporal dead zone" | Hoisted, in "temporal dead zone" |
| Reassignment | Allowed | Allowed | Not allowed |
| Redeclaration | Allowed | Not allowed in same scope | Not allowed in same scope |
| Initial Value | Optional | Optional | Required |
| Usage | Legacy code, or function-wide use | For variables needing reassignment | For constants or fixed references |

## In summary:
- **`var`** is function-scoped and allows redeclaration, making it error-prone in modern code.
- **`let`** is block-scoped, cannot be redeclared, and is suitable for variables that change.
- **`const`** is block-scoped, cannot be reassigned or redeclared, and is best for fixed values.

> The Temporal Dead Zone (TDZ) is the period between entering a scope and the declaration of a let or const variable, during which the variable is in an uninitialized state and cannot be accessed, resulting in a ReferenceError.

```js
console.log(x);  // ReferenceError: Cannot access 'x' before initialization
let x = 5;       // TDZ ends here
console.log(x);  // Output: 5
```
#### In this example:
- The first `console.log(x)` results in a `ReferenceError` because `x` is in the Temporal Dead Zone before it is declared.
- The second `console.log(x)` works correctly after `x` has been initialized with the value `5`.
---

### Naming Conventions for Variables in JavaScript
1. **Camel Case** (Preferred for most variables)
    - Start with a lowercase letter and capitalize each subsequent word.
    - **Example**: `userName`, `totalAmount`, `currentPage`
2. **Descriptive Names** (Choose meaningful names)
    - Variables should have names that clearly describe what they represent.
    - **Example**: `totalPrice`, `userAge`, `isLoggedIn`
3. **Avoid Reserved Words** (Do not use JavaScript keywords)
    - JavaScript has a set of reserved words (like `break`, `for`, `return`, etc.) that cannot be used as variable names.
    - **Example**: Avoid `class`, `let`, `function` as variable names.
4. **Use Lowercase for Constants (when applicable)**
    - Constants (using `const`) are often written in **uppercase** with underscores between words.
    - **Example**: `MAX_USERS`, `PI`, `API_KEY`
5. **Use `let` and `const` for Variable Declarations**:
    - **`let`** for variables that may change, and **`const`** for constants (values that don’t change after initialization).
    - **Example**
    ```js
    const MAX_LENGTH = 50; // constant
    let currentIndex = 0; // variable
    ```
6. **Avoid Single-letter Variables (except in loop counters or short-term use)**:
    - Try to avoid single-letter variable names unless they are used in a limited scope (like loop counters).
    - **Example**: Instead of `a`, use `age` or `itemName`.
7. **Use Plural Names for Arrays or Collections**:
    - When the variable holds multiple items (like arrays or objects), use plural names.
    - **Example**: `users`, `itemsList`, `studentScores`
8. **Avoid Starting Variable Names with Numbers**:
    - Variable names cannot start with a number. They must start with a letter, underscore (`_`), or dollar sign (`$`).
    - **Example**: `name1`, not `1name`
9. **Use Underscores for Multi-word Variable Names (Optional)**:
    - While **camelCase** is preferred in JavaScript, some codebases may use **snake_case** (especially for constants or when following older conventions).
    - **Example**: `user_name`, `total_amount`
---
### Best Practices for Variable Naming
1. **Be Clear and Concise**:
    - Choose variable names that are easy to understand and convey the purpose clearly.
    - **Example**: Use `email` instead of `e`, `customerList` instead of `cl`.
2. **Avoid Magic Numbers**:
    - Use named constants for values that represent important or fixed values.
    - **Example**: Instead of using `3.14`, declare `const PI = 3.14;` and use `PI` throughout your code.
3. **Use Meaningful Boolean Names**:
    - For boolean variables, name them as questions (starting with `is`, `has`, `can`, etc.) so their purpose is clear.
    - **Example**: `isLoggedIn`, `hasPermission`, `canEdit`
4. **Keep Scope in Mind**:
    - Use variables in the smallest scope possible. If a variable is only needed in a specific block or function, keep it within that scope.
    - **Example**: Declare a variable inside a loop or function if it’s only used there.
5. **Follow Project or Team Conventions**:
    - Adhere to the naming conventions used by your team or project, as consistency is key for collaboration.
6. **Avoid Abbreviations**:
    - Abbreviations can lead to confusion. Try to use full words unless they are widely understood.
    - **Example**: Use `totalAmount` instead of `totAmt`, `getUserData` instead of `getUsrData`.
---
### Example of Good Variable Naming and Best Practices:
```js
// Correct variable names and best practices

const MAX_USERS = 100;  // constant (all caps)
let currentUser = 'Alice';  // descriptive and in camelCase
let userAge = 30;  // meaningful, concise variable name

const isLoggedIn = true;  // Boolean variable with a question-like name
let shoppingCartItems = ['apple', 'banana'];  // plural name for array
let totalPrice = 0;  // descriptive variable for sum

function calculateDiscount(price, discountPercentage) {
    const discountAmount = price * (discountPercentage / 100);
    return price - discountAmount;
}
```
In this example:

- **Clear and meaningful names** (`currentUser`, `userAge`, `shoppingCartItems`) are used.
- **Constants** are in uppercase (`MAX_USERS`).
- **Boolean variables** use names that imply yes/no values (`isLoggedIn`).