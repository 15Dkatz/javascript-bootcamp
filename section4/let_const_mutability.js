// Let variables can be declared without assignment.
// They will be undefined.
let total;
// They can also be re-assigned.
total = 10;
total = 11;

// Const variables have to be assigned when declared.
const foo; // SyntaxError. JavaScript expects assignemnt, not the semicolon after foo.

// They can't be re-assigned
const foo = 20;
foo = 21; // SyntaxError. Assignment to constant variable.

// Constants that are assigned to mutable objects can still be mutated though.

const foo = function() {}; // or const foo = {}, const foo = []

foo.test = 'bar';

foo.test; // 'bar'
