// Object Destructuring
const person = { name: "Murali", age: 20 };
const { name, age } = person;
console.log(name, age); // Murali 20

// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second); // red green

// Destructuring with renaming
const { name: userName } = person;
console.log(userName); // Murali

// Destructuring in function
function greet({ name }) {
  console.log("Hello", name);
}
greet(person); // Hello Murali

// Rest Operator
const [a, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]
