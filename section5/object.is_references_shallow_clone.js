// Object.is returns whether two values are equal.
// A primitive is always equal to itself

Object.is('bar', 'bar'); // true
Object.is(1, 1); // true
Object.is(false, false); // true
Object.is(undefined, undefined); // true
Object.is(null, null); // true

// Object.is is distinguished from ==
1 == '1'; // true
Object.is(1, '1'); // false

// Object.is is distinguished from ===
+0 === -0; // true
// const x = 9;
// -(9-x);

Object.is(+0, -0); // false

// Two objects aren't the same through Object.is,
// unless they're the same reference
Object.is([], []); // false

const object1 = {};
const object2 = {};

const ref1 = object1;

Object.is(object1, object2); // false
Object.is(object1, ref1); // true

// ***

const inner = {
  zoo: 10,
  zar: 11
};

const source = {
  foo: 5,
  bar: 6,
  tee: inner
};

// shallow clone
const shallowClone = Object.assign({}, source);
// shallow clone
const spreadClone = { ...source };

shallowClone.foo = -1;

// These updates modify the `inner` object.
// Even shallowClone.tee modifies `inner` since it's a
// reference to the original inner object
inner.zoo = -88;
shallowClone.tee.zar = -5;
// The effect is that these updates show up everywhere that the reference is used

console.log('source', source);
console.log('shallowClone', shallowClone);
console.log('spreadClone', spreadClone);

// Output:
// source { foo: 5, bar: 6, tee: { zoo: -88, zar: -5 } }
// shallowClone { foo: -1, bar: 6, tee: { zoo: -88, zar: -5 } }
// spreadClone { foo: 5, bar: 6, tee: { zoo: -88, zar: -5 } }

Object.is(inner, shallowClone.tee); // true