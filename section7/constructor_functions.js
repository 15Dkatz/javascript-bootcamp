// Building is a constructor function
// In object-oriented programming terms, this would be an object template
function Building(name, stories, address) {
  this.name = name;
  this.stories = stories;
  this.address = address;
  this.info = function() {
    console.log(
      'name:',
      this.name,
      '| stories:',
      this.stories,
      '| address:',
      this.address
    );
  }
}

// empireState is an instance of the building template
// Notice that the `new` keyword is necessary
//   It's implicitly creating an owner object around the
//   this` keyword for the instance of the Building constructor
const empireState = new Building(
  'Empire State Building',
  102,
  'NY, NY'
);

console.log('empireState', empireState);

empireState.info();

// salesforceTower is an instance of the building template
const salesforceTower = new Building(
  'Salesforce Tower',
  61,
  'SF, CA'
);

salesforceTower.info();
