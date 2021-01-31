// const monthlyRent = 500;

// const yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);	

/*
  Write some code that declares two variables, character and timesToRepeact.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

let character = 'a';
let ans = '';
const timesToRepeat = 50;

for (let i = 0; i < timesToRepeat; i++) {
	ans += character;
}

console.log(ans);
