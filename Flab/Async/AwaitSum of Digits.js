const sumOfDigits = async (number) => {
    return number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
};

(async () => {
    const sum = await sumOfDigits(1234);
    console.log("Sum of digits:", sum);
})();
