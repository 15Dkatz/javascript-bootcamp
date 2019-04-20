const source = {
  kim: 99,
  tom: 92
};

// The spread syntax looks like an ellipses: ...

const clone = {
  bob: 89,
  ann: 95,
  ...source, // the source object is spread into the target
  ron: 85
};

console.log('clone', clone);

const elements = ['fire', 'water'];

// The spread syntax can be used for array merges
[...elements, 'air', 'earth'];

// The spread syntax can be used for array clones
const elementsClone = [...elements];

console.log('elementsClone', elementsClone);

const sumXYZ = function(x, y, z) {
  return x + y + z;
}

const numbers = [3, 5, 9];
// The spread syntax applies the items of an array
// as individual arguments
sumXYZ(...numbers);
// equivalent to sumXYZ(numbers[0], numbers[1], numbers[2]);
