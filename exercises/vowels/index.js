// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vArray = str.match(/[aeiou]/gi) || [];
  return vArray.length;
}

module.exports = vowels;

// function vowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const vArray = str
//     .toLowerCase()
//     .split("")
//     .filter(letter => vowels.includes(letter));
//   return vArray.length;
// }
