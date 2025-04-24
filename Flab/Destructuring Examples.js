// Object Destructuring
const student = { name: "John", age: 21, course: "FSD" };
const { name, age } = student;
console.log(name, age);

// Array Destructuring
const colors = ["Red", "Green", "Blue"];
const [first, second] = colors;
console.log(first, second);

// Destructuring with renaming
const { course :subject} = student;
console.log(subject);

// Destructuring with function
function display({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
display(student);

// Destructuring with Rest
const [x, y, ...rest] = [10, 20, 30, 40];
console.log(x, y, rest);
