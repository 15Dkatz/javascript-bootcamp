// Truthy values
// All values are truthy, unless they are falsy
// This may seem obvious. But it points out the fact
// that it's more important to narrow the falsy values
// Then everything else is truthy.

// Falsy values:
0, undefined, null, false, ''

if (0) {
  console.log('hi');
}
// Any of these values as an if condition will not create a log

// Truthy values:
1, [], {}, 'foo'

if (1) {
  console.log('hi');
}
// Any of these values as an if condition will create a log