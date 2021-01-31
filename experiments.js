// const monthlyRent = 500;

// const yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);	

/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

// let character = 'a';
// let ans = '';
// const timesToRepeat = 50;

// for (let i = 0; i < timesToRepeat; i++) {
// 	ans += character;
// }

// console.log(ans);

const A = "A";
let F;

function doStuff(B) {
  console.log(B);  // greenlight
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // redlight
  console.log(H); // greenlight
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // greenlight
  const G = "G";
}
console.log(E); // greenlight
console.log(G); // redlight

doStuff("B");
console.log(B); // redlight
console.log(C);	// redlight
console.log(F); // greenlight
