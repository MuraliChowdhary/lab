const numbers = [5, 10, 15, 20, 25, 30];

const doubled = numbers.map(num => num * 2);
const filtered = doubled.filter(num => num > 20);

console.log("Doubled:", doubled);
console.log("Filtered (>20):", filtered);
