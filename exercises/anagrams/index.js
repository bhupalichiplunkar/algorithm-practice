// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const A = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const B = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return A === B;
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const A = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const B = stringB.replace(/[^\w]/g, "").toLowerCase();

//   const charObjA = charMapBuilder(A);
//   const charObjB = charMapBuilder(B);

//   if (Object.keys(charObjA).length !== Object.keys(charObjB).length) {
//     return false;
//   }

//   return Object.keys(charObjA).every(char => {
//     return charObjA[char] === charObjB[char];
//   });
// }

// function charMapBuilder(string) {
//   const charObj = {};
//   for (let char of string) {
//     charObj[char] = charObj[char] + 1 || 1;
//   }
//   return charObj;
// }
