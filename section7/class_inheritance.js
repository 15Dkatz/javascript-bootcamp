class Structure {
  constructor() {
    this.isStructure = true;
    this.humanMade = true;
  }
}

// Class inheritance is achieved through the `extends` keyword
class Building extends Structure {
  constructor(name, stories, address) {
    // A super call is necessary to invoke the parent constructor
    // Even if the parent constructor has no arguments
    //   This is helpful because the parent constructor could theoretically
    //   be setting up some important properties
    super();
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

  get needElevator() {
    return this.stories > 10;
  }

  set guest(value) {
    this.guests.push(value);
  }
}

class Restaurant extends Building {
  constructor(name, stories, address, cuisine) {
    super(name, stories, address);

    this.cuisine = cuisine;
  }

  // In addition to the constructor, methods can be overridden as well
  // Call the methods implemented in the parent using `super`
  info() {
    super.info();
    console.log(`We serve ${this.cuisine} cusine`);
  }
}

const kaiju = new Restaurant(
  'kaiju',
  2,
  'SF, CA',
  'Japanese'
);

console.log('kaiju', kaiju);
// kaiju Restaurant {
//   isStructure: true,
//   humanMade: true,
//   name: 'kaiju',
//   stories: 2,
//   address: 'SF, CA',
//   guests: [],
//   cuisine: 'Japanese'
// }

kaiju.info();
// name: kaiju | stories: 2 | address: SF, CA
// We serve Japanese cusine