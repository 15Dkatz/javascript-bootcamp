import _ from 'lodash';

// custom function for deep cloning function that mostly works
// it needs to handle arrays as well
const cloneDeep = source => {
  const result = {};

  // [[key, value], [key, value]]
  const entries = Object.entries(source);

  entries.forEach(entry => {
    // entry: [key, value]
    const [key, value] = entry;

    if (typeof value === 'object') {
      // clone the object's properties
      result[key] = cloneDeep(value);
    } else {
      result[key] = value;
    }
  });

  return result;
};

const source = {
  one: 1,
  nest: {
    two: 2,
    three: 3
  },
  four: [4, 'four'],
  log: function() {}
};

// shallow clone - only copies inner object references
const assignClone = Object.assign({}, source);

// shallow clone - only copies inner object references
const spreadClone = { ...source };

// deep clone - only supports numbers, strings, booleans, null, objects, and arrays
const jsonClone = JSON.parse(JSON.stringify(source));

// deep clone - works, but needs to handle arrays
const customClone = cloneDeep(source);

// deep clone - the best option out there: use the existing work behind lodash
const lodashClone = _.cloneDeep(source);

source.nest.two = -9;

console.log('source', source);
console.log('assignClone', assignClone);
console.log('spreadClone', spreadClone);
console.log('jsonClone', jsonClone);
console.log('customClone', customClone);
console.log('lodashClone', lodashClone);

// Output:
// source {
//   one: 1,
//   nest: { two: -9, three: 3 },
//   four: [ 4, 'four' ],
//   log: [Function]
// }
// assignClone {
//   one: 1,
//   nest: { two: -9, three: 3 },
//   four: [ 4, 'four' ],
//   log: [Function]
// }
// spreadClone { 
//   one: 1,
//   nest: { two: -9, three: 3 },
//   four: [ 4, 'four' ],
//   log: [Function] 
// }
// jsonClone {
//   one: 1,
//   nest: { two: 2, three: 3 },
//   four: [ 4, 'four' ] 
// }
// customClone {
//   one: 1,
//   nest: { two: 2, three: 3 },
//   four: { 0: 4, 1: 'four' },
//   log: [Function]
// }
// lodashClone {
//   one: 1,
//   nest: { two: 2, three: 3 },
//   four: [ 4, 'four' ],
//   log: [Function]
// }