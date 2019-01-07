// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stairs = "") {
  if (row === n) {
    return;
  }

  if (stairs.length === n) {
    console.log(stairs);
    return steps(n, row + 1);
  }
  // if (stairs.length <= row) {
  //   stairs += "#";
  // } else {
  //   stairs += " ";
  // }
  const add = stairs.length <= row ? "#" : " ";
  return steps(n, row, stairs + add);
}

// function steps(n, row = 0) {
//   if (row === n) {
//     return;
//   }
//   const stairs = new Array(n).fill("#").fill(" ", row + 1, n);
//   console.log(stairs.join(""));
//   steps(n, row + 1);
// }

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let stair = "";
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     const stringArr = new Array(n).fill("#").fill(" ", i + 1, n);
//     console.log(stringArr.join(""));
//   }
// }

module.exports = steps;
