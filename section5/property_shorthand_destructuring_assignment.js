const weapon = 'lightsaber';

// Property shorthand.
// When the property name and the variable name are identical,
// the property name only has to be specified once.
const vader = {
  title: 'darth',
  children: ['Luke', 'Leia'],
  weapon // this is equivalent to weapon: weapon
};

console.log(vader);

const planets = [
  'mercury', 
  'venus', 
  'earth', 
  ['mars', 'phobos', 'deimos']
];

// Array destructuring
const [one, two, three] = planets;

// There can be default values
const [one, two, three, fourth='planet'] = planets;

// Indexes can be skipped
const [one, , , fourth='planet'] = planets;

// Nested array destructuring
const [one, , , [fourth, moon1, moon2]] = planets;


const wizard = {
  name: 'Harry',
  age: 17,
  info: {
    hobby: 'Quidditch',
    spells: ['Expelliarmus']
  }
};

// Object destructuring
// Create variables out of matching property names
const {
  name,
  age,
  house='Gryffindor',
  info: { hobby }, // nested object destructuring
  info // the nested destructuring above doesn't destructure the base property name. You have to destructure this separately.
} = wizard;

console.log(name, age, house, hobby, info);
