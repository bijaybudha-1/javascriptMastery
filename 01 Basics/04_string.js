
const firstName = "Bijay";
const lastName = "Budha";

// Normal way to display variable value
console.log(firstName + " " + lastName);

// Another way string + varibale
console.log("My name is " + firstName + " " + lastName);

// Modern way to display string + variable
console.log(`My name is ${firstName} ${lastName}`);

// some String Methods
// 1. length
console.log(firstName.length);

// 2. toUpperCase
console.log(firstName.toUpperCase());

// 3. toLowerCase
console.log(firstName.toLowerCase());

// 4. charAt
console.log(firstName.charAt(0));

// 5. indexOf
console.log(lastName.indexOf("d"));


let username = "bijaybudha";
// 6. lastIndexOf
console.log(username.lastIndexOf("b"));

// 7. slice
console.log(username.slice(0, 5));

let language = "    JavaScript       ";

// 8. trim
console.log(language.trim());
console.log(language.trim().length);

console.log(language.trimStart());
console.log(language.trimStart().length);

console.log(language.trimEnd());
console.log(language.trimEnd().length);

// 9. replace
console.log(username.replace("bijay", "Hello"));

console.log(username.replace("bijaybudha", "sushilkunwar"));

// 10. includes
const rhymes = "johny johny yes papa, eating sugar no papa"
console.log(rhymes.includes("j"));
console.log(rhymes.includes("papa"));
console.log(rhymes.includes("bijay"));

// 11. split
email = "bijaybudha123@gmail.com";
console.log(email.split("@"));
console.log(email.split("a"));
