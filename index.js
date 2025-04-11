function* numberGenerator() {
    let num = 1;
    while (true) {
      yield num;
      num++;
    }
  }
  
  const gen = numberGenerator();
  
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3