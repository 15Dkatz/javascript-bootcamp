// this = Window object
var coder = {
  username: 'joe',
  years: 3,
  logStatus: () => {
    // An arrow function does not create a `this` object
    // this = Window object
    console.log('working from office');
  },
  logProfile: function() {
    // A function expression creates a `this` object
    // this = owner object
    console.log('username:', this.username);
    console.log('years coding:', this.years);
  }
};

coder.logProfile();
