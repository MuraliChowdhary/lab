const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

console.log("Vowels in 'education':", countVowels("education"));




const s  = str => (str.match(/[aeiou]/gi) || []).length

console.log(s("education"))