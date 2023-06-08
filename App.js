// LOCAL MODULE : Unlike built-in and external modules, local modules are created locally in your Node.js application.
const calculator = require("./logger");

let a = 10;
let b = 20;

console.log(calculator.add(a, b));
console.log(calculator.sub(a, b));
console.log(calculator.div(a, b));
console.log(calculator.mult(a, b));
