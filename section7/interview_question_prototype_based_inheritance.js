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