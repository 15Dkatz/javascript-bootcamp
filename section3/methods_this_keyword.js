var coder = {
  username: 'joe',
  years: 3,
  languages: ['JS', 'ruby', 'scala'],
  company: {
    name: 'Coder Inc.',
    location: 'San Francisco'
  },
  // functions that are members of objects are called methods
  logStatus: function() {
    console.log('working from office');
  },
  // methods have access to `this`: a representation of the owner object
  logProfile: function() {
    console.log('username:', this.username);
    console.log('years coding:', this.years);
    console.log('languages:', this.languages.join(', '));
    console.log('company name:', this.company.name);
    console.log('company location:', this.company.location);
  }
};

coder.logStatus();
coder.logProfile();
