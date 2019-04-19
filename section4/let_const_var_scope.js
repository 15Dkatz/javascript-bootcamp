// Scope
// Let/const variables are scoped to blocks
let color = 'blue';

{
  let color = 'red';

  console.log('in function', color); // red
}

console.log('out of function', color); // blue


// Variables created with `var` are scoped to functions
// *** Ex 1:
// Let/const variables are scoped to blocks
var color = 'blue';

{
  var color = 'red';

  console.log('in function', color); // red
}

console.log('out of function', color); // red
// Notice that the re-declaration of var color in the block changed
// the variable for the whole program!

// *** Ex 2:
var color = 'blue';

(function() {
  var color = 'red';

  console.log('in function', color); // red
})();

console.log('out of function', color); // blue


let x = 1;

// Notice that the same const name can be re-used in each case
// It's because of the blocks of code, creating separate scopes
switch(x) {
  case 1: {
    const message = 'x is one';
    console.log(message);
    break;
  }
  case 2: {
    const message = 'x is two';
    console.log(message);
    break;
  }
  default: {
    const message = 'x is ' + x;
    console.log(message);
  }
}