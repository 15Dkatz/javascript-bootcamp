// The variable is dynamic.
// Notice that you don't have to declare the type.
// It's not static like `string foo = 'hello'`
var foo = 'hello';

// primitive data types
// numbers: 1
// strings: 'foo'
// booleans: true
// undefined: undefined

// non-primitives
// objects: {}
// functions: function() {}

console.log(typeof 1);         // number
console.log(typeof 'foo');     // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof {});        // object
function eatRamen() {};
console.log(typeof eatRamen);  // function
console.log(typeof []);        // object

// An array is implemented as an object under the hood

// This words array
words = ['foo', 'bar', 'goo', 'zar'];

// can be represented as:
words = {
  0: 'foo',
  1: 'bar',
  2: 'goo',
  3: 'zar'
}

// Notice that accessing foo works for both the array and object:
words[0];