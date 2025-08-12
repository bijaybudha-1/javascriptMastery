# Truth & False Values

### False Values

In JavaScript, **falsy values** are values that are considered `false` when evaluated in a Boolean context (e.g., inside an `if` statement). Here is a list of all **falsy values**:

1. **`false`** – Boolean `false`
2. **`0`** – The number zero
3. **`0`** – Negative zero
4. **`0n`** – B igInt zero
5. **`""`** – An empty string
6. **`null`** – The absence of any value
7. **`undefined`** – A variable that has not been assigned a value
8. **`NaN`** – "Not a Number", a value representing invalid number results

### Truth Values

In JavaScript, **truthy values** are all values that are not falsy. These values are considered `true` when evaluated in a Boolean context. Here is a list of **truthy values**:

1. **`true`** – Boolean `true`
2. **Non-empty strings** – Any string that is not empty (e.g., `"hello"`, `" "`).
3. **Any non-zero number** – Positive or negative numbers other than `0` and `0` (e.g., `1`, `5`, `3.14`).
4. **Any non-zero BigInt** – BigInt values other than `0n` (e.g., `1n`, `1000n`).
5. **Objects** – All objects, even empty ones (e.g., `{}`, `[]`, `function() {}`).
6. **Arrays** – Even empty arrays (e.g., `[]`, `[1, 2, 3]`).
7. **`new Date()`** – A Date object (e.g., `new Date()`).
8. **`Infinity` and `Infinity`** – Positive and negative infinity.
9. **`RegExp` objects** – Regular expressions (e.g., `/abc/`).