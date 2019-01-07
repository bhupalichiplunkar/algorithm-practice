// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxCount = 0;
  let maxChar = "";
  str.split("").reduce((charObj, char) => {
    charObj[char] = charObj[char] + 1 || 1;
    if (charObj[char] > maxCount) {
      maxCount = charObj[char];
      maxChar = char;
    }
    return charObj;
  }, {});
  return maxChar;
}

module.exports = maxChar;
