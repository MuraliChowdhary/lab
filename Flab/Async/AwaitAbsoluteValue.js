const getAbsolute = async (num) => {
    return Math.abs(num);
};

(async () => {
    const absValue = await getAbsolute(-15);
    console.log("Absolute value:", absValue);
})();
