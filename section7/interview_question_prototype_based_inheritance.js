// *** Question ***

function Artist(name, talent) {
  this.name = name;
  this.talent = talent;
}

class Musician extends Artist {
  constructor(name, talent, instrument) {
    super(name, talent);

    this.instrument = instrument;
  }
}

const frank = new Musician(
  'Frank Sinatra',
  'singer',
  'voice'
);

Object.prototype.info = function() {
  console.log('this', this);
}

// What is the output of
frank.info();

// *** Answer ***
// this Musician { name: 'Frank Sinatra', talent: 'singer', instrument: 'voice' }

// *** Investigation ***
// The parent of Musician is Artist.
// The parent of the Artist constructor function is the Object prototype.
// Therefore, attaching .info to the Object.prototype, means that
// any instance of artist can find .info.
//
// Properties aren't copied from the parent prototype to a child.
//
// JavaScript does a lookup through the prototype chain to see if the
// method is available.
//
// This is why updates to the prototype make the method immediately
// available for all instances of Object.
