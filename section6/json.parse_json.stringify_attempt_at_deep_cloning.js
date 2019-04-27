// JSON format.
// Notice that that the key names have double quotes
// Only strings, numbers, booleans, null, arrays, and objects are valid in JSON
// No functions
const carJson = `{
  "color": "red",
  "doors": 2,
  "features": ["convertible", "four-wheel drive"],
  "details": {
    "year": 2019,
    "manufacturer": "Honda"
  },
  "sold": false,
  "owner": null
}`;

JSON.parse(carJson);

const owner = { name: 'J.M.' };

const car = {
  color: 'blue',
  doors: 4,
  features: ['sunroof'],
  details: {
    year: 2019,
    manufacturer: 'Mercedes'
  },
  sold: true,
  owner
};

JSON.stringify(car);

// Using JSON.parse(JSON.stringify(object)) deeply clones the object
// With a catch though.
// The object has to only consist of the values supported by JSON:
//   - strings, numbers, booleans, null, arrays, and objects
//   - no object methods
const carClone = JSON.parse(JSON.stringify(car));
const shallowClone = Object.assign({}, car);
car.owner.name = 'D.T.';

console.log('car', car);
console.log('carClone', carClone);
console.log('shallowClone', shallowClone);

// Output:
// car {
//   ...,
//   owner: { name: 'D.T.' }
// }
// carClone {
//   ...,
//   owner: { name: 'J.M.' }
// }
// shallowClone {
//   ...
//   owner: { name: 'D.T.' }
// }
