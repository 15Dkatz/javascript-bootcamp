// Let variables are not hoisted
{
  zoo = {};

  console.log('zoo', zoo);

  let zoo; // Reference Error
}


// Var declarations are hoisted.
// Their declarations go to the top of the program.
// Note that this doesn't include assignment.

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