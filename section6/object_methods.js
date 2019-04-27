const gradeMap = {
  frank: 92,
  elise: 95,
  angie: 96
};

// Object methods
Object.keys(gradeMap); // ['frank', 'elise', 'angie']
Object.values(gradeMap); // [92, 95, 96]
Object.entries(gradeMap); // [['frank', 92], ['elise', 95], ['angie', 96]]

// ***
const source = {
  frank: 92,
  elise: 95,
  angie: 96,
  timmy: 79
};

const target = {
  timmy: 89,
  joyce: 87
};

const source2 = {
  jacob: 91,
  timmy: 99
};

// timmy in source2 will win. It's the right most argument
const combined = Object.assign(target, source, source2);

console.log('combined', combined);
// combined { timmy: 99, joyce: 87, frank: 92, elise: 95, angie: 96, jacob: 91 }
