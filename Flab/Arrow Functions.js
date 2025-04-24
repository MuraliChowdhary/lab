const arr = [5, 10, 15, 20, 25, 30];

const doubleValues = arr.map(num => num * 2);
const filteredValues = doubleValues.filter(num => num > 20);

console.log("Filtered Doubled Values > 20:", filteredValues);
