// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const charArray = str.split("");
  let reversedString = "";
  charArray.forEach(char => {
    reversedString = `${char}${reversedString}`;
  });
  return reversedString;
}

module.exports = reverse;
