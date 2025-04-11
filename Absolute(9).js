const findAbsolute = async (num) => {
    return Math.abs(num);
  };
  
  (async () => {
    const result = await findAbsolute(-20);
    console.log("Absolute Value:", result);
  })();
  