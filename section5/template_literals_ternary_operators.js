// Template literals offer a concise way to do string concatenation and interpolation
for (let i=0; i<5; i++) {
  console.log(`step ${i}`);
}

// Template literals can also make nicely formatted strings
const message = (
`Space
The final frontier
These are the voyages of the starship Enterprise`
);

console.log(message);

const x = 5;

// The ternary operator is essentially a one-line if statement
const info = (x % 2 === 0) ? 'even' : 'odd';
// let info;
// if (x % 2 === 0) {
//   info = 'even';
// } else {
//   info = 'odd';
// }

// Here's a one-liner with a template literal and ternary operator
console.log(`The number x is ${(x % 2 === 0) ? 'even' : 'odd'}`);
