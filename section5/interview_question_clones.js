// *** Question ***

const luke = {
  surname: 'Skywalker',
  age: 19,
  family: {
    father: 'Anakin Skywalker',
    mother: 'Padme Amidala',
    siblings: ['Leia']
  },
  quote: function() {
    console.log(
      'I think that R2 unit may have been stolen'
    );
  }
};

const assignClone = Object.assign({}, luke);
const spreadClone = { ...luke };
const jsonClone = JSON.parse(JSON.stringify(luke));

assignClone.age = 25;
assignClone.family.father = 'Darth Vader';

// What is the output?
console.log('luke', luke);
console.log('assignClone', assignClone);
console.log('spreadClone', spreadClone);
console.log('jsonClone', jsonClone);

// *** Answer and Invesitgation ***

import _ from 'lodash';

const family = {
  father: 'Anakin Skywalker',
  mother: 'Padme Amidala',
  siblings: ['Leia']
};

const luke = {
  surname: 'Skywalker',
  age: 19,
  family,
  quote: function() {
    console.log(
      'I think that R2 unit may have been stolen'
    );
  }
};

// Object.assign(target, source);
const assignClone = Object.assign({}, luke);
// const assignClone = {
//   surname: 'Skywalker',
//   age: 25,
//   family: {
//     father: 'Darth Vader',
//     mother: 'Padme Amidala',
//     siblings: ['Leia']
//   },
//   quote: function() {
//     console.log(
//       'I think that R2 unit may have been stolen'
//     );
//   }
// };
const spreadClone = { ...luke };
const jsonClone = JSON.parse(JSON.stringify(luke));
const lodashClone = _.cloneDeep(luke);

assignClone.age = 25;
assignClone.family.father = 'Darth Vader';

Object.is(assignClone.family, family); // true
// Notice that assignClone.family is a reference to the original object!

// What is the output?
console.log('luke', luke);
    // family.father = 'Darth Vader';
    // age = 19;
console.log('assignClone', assignClone);
    // family.father = 'Darth Vader';
    // age = 25;
console.log('spreadClone', spreadClone);
    // family.father = 'Darth Vader';
    // age: 19
console.log('jsonClone', jsonClone);
    // family.father = 'Anakin Skywalker';
    // age: 19
    // no quote method

// how would you do a true deep clone?
//   - lodash.cloneDeep
console.log('lodashClone', lodashClone);
