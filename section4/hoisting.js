// Let variables are not hoisted
{
  zoo = {};

  console.log('zoo', zoo);

  let zoo; // Reference Error
}


// Var declarations are hoisted.
// They are hoisted to the top of the function scope

// A regular code block does not limit the hoisting
// var zoo; // implicitly declared
console.log('zoo', zoo); // zoo undefined

{
  zoo = {};

  console.log('zoo', zoo);

  var zoo;
}

// A function does limit the hoisting
console.log('zoo', zoo); // ReferenceError zoo is not defined

function test() {
  zoo = {};

  console.log('zoo', zoo);

  var zoo;
}

// Note that hoisting does not include the doesn't include assignment.

// var a;
// var b;
// var c;

// Function declarations are hoisted too.
// A reference to the function definition is created.

{

  a = 2;
  b = 4;
  c = 3;

  const result = (a+b)/c;

  var a, b, c;

  console.log('result', result);
}