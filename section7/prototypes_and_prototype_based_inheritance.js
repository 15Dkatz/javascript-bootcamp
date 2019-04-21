// NOTE:
// This code assumes you're executing the JavaScript in a
// browser development console

function Building(name, stories) {
  this.name = name;
  this.stories = stories;
}

Building.prototype // { constructor: function }

// You can use the constructor function directly
const foo = new Building('foo', 2);

// Or you can use the constructor defined in the prototype
const goo = new Building.prototype.constructor('goo', 3);

// Since every instance has its parent prototype available,
// you can even construct new instances, using an instance itself
const bar = new foo.constructor('bar', 4);

// You can also add new properties to the constructor's
// prototype at any time

Building.prototype.isBuilding = true;
Building.prototype; // {isBuilding: true, constructor: function }

// in the browser console, typing `foo.` will reveal what methods
// it has available. Notice that `isBuilding` is there!
foo.

// The isBuilding property is available on foo. Even though it was
// added to the Building prototype after the creation of foo.

// This is because JavaScript does a lookup through prototypes.
// It doesn't copy the prototype properties to an instance at
// creation time.
// Instead, JavaScript will look up to see if the methods are available
// on the parent prototype (if it's not a property set in the constructor)
// itself.

// This also shows why primitive values have methods.
// Typing `1.` in the console won't reveal methods:
1. // nothing

// But if you assign the number to a constant, the browser environment
// will show that there are methods available:
const n = 1;
n. // reveals a list of methods: constructor, toExponential, toFixed, toLocaleString, etc.

// Notice that these are the methods available in the global
// Number constructor function's prototype!
Number.prototype; // { constructor, toExponential, toFixed, toLocaleString, ... }

// Under the hood, JavaScript sees that you have a number data type.
// If you use a method
// So it temporarily passes the number to the Number constructor, to get
// the available methods. This converts the primitive number to an object.
// And the methods are now available on that temporarily converted number.