// Creating symbols
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description'); // Different from sym2

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(description)
console.log(sym2 === sym3); // false (symbols are unique)

// Using symbols as object properties
const obj = {
  [sym1]: 'value1',
  [sym2]: 'value2'
};

console.log(obj[sym1]); // value1
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(), Symbol(description)]