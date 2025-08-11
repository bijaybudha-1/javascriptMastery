var globalVar = 'I am a global variable';

function showGlobalVar() {
  console.log(globalVar);  // Accessible here
}

showGlobalVar();            // Output: I am a global variable
console.log(globalVar);      // Output: I am a global variable

function myFunction() {
  var localVar = 'I am a local variable';
  console.log(localVar);     // Output: I am a local variable
}

myFunction();
console.log(localVar);       // Error: localVar is not defined

if (true) {
  let blockVar = 'I am block scoped';
  console.log(blockVar);     // Output: I am block scoped
}

console.log(blockVar);       // Error: blockVar is not defined
