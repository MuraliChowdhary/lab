const countVowels = str => {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
  };
  
  console.log("Vowels:", countVowels("Hello World"));
  

   
