// A class is a nice alternative to the constructor function
// If you have experience in other language, the `class` keyword
// can be more intuitive
class Building {
  constructor(name, stories, address) {
    this.name = name;
    this.stories = stories;
    this.address = address;
    this.guests = [];
  }

  info() {
    console.log(
      'name:',
      this.name,
      '| stories:',
      this.stories,
      '| address:',
      this.address
    );
  }

  // getter methods can do dynamic calculation
  // they take no arguments
  get needElevator() {
    return this.stories > 10;
  }

  // setter methods can do dynamic calculation
  // they take one argument
  set guest(value) {
    this.guests.push(value);
  }
}

const empireState = new Building(
  'Empire State Building',
  102,
  'NY, NY'
);

console.log('empireState', empireState);

empireState.info();

const salesforceTower = new Building(
  'Salesforce Tower',
  61,
  'SF, CA'
);

salesforceTower.info();

console.log(
  'salesforceTower.needElevator',
  salesforceTower.needElevator // invoking the `needElevator` getter
);

// invoking the `guest` setter, twice
salesforceTower.guest = 'J. Smith';
salesforceTower.guest = 'A. Seedy';

console.log(
  'salesforceTower.guests',
  salesforceTower.guests
);
