// Try the property test
// 1. Create a value.
// 2. Attach a property to that value.
// 3. See if that property is still accessible.
// 4. If so, it's an object.

var store = {};
store.test = 'foo';
store.test; // 'foo' (therefore, object)

var jobs = [];
jobs.test = 'foo';
jobs.test; // 'foo' (therefore, object)

var log = function() {};
log.test = 'foo';
log.test; // 'foo' (therefore, object)

var total = 1;
total.test = 'foo';
total.test; // undefined (therefore, not object)

var greeting = 'hello';
greeting.test = 'foo';
greeting.test; // undefined (therefore, not object)
