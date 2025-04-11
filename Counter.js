function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log('Count:', count);
    };
  }
  
  const counter = outer();
  counter(); // Count: 1
  counter(); // Count: 2
  