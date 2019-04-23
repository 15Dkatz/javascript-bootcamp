// NOTE:
// This code assumes you're executing the JavaScript in a
// browser development console

const t = 'ahoy';

t. // Reveals a preview of methods available on t

// T is a primitive value (stirng)
// But notice that there are methods available, as if the string is an object

t.__proto__; // revals the properties and methods available in the parent prototype
// Notice that this is identical to `String.prototype`
Object.is(t.__proto__, String.prototype); // true

// Walk up the prototype chain:
t.__proto__.__proto__; // this reveals an object that is identical to Object.prototype;
Object.is(tee.__proto__.__proto__, Object.prototype); // true

// All objects have the Object at their root in the prototype chain
Object.is(Number.__proto__.__proto__, Object.prototype); // true

// This is why almost everything in JavaScript is an object!
