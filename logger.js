// This function is module wrapper function
// (function (exports, require, module, __filename, __dirname)
function add(a, b) {
  let result = a + b;
  return result;
}

function sub(a, b) {
  let result = a - b;
  return result;
}

function div(a, b) {
  let result = a / b;
  return result;
}

function mult(a, b) {
  let result = a * b;
  return result;
}

module.exports.add = add;
module.exports.sub = sub;
module.exports.div = div;
module.exports.mult = mult;
