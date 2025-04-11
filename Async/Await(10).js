const sumOfDigits = async (num) => {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  };
  
  (async () => {
    const result = await sumOfDigits(1234);
    console.log("Sum of digits:", result);
  })();
  