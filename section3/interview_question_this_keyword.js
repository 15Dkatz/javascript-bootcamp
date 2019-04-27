// *** Question ***

// what is the output?

var vehicle = {
  type: 'sedan',
  logInfo: function() {
    var THIS = this;
    console.log('1. this.type', this.type);
    console.log('1. THIS.type', THIS.type);
 
    (function() {
      console.log('2. this.type', this.type);
      console.log('2. THIS.type', THIS.type);
    })();
  }
}
 
vehicle.logInfo();

// *** Answer ***
// 1. this.type sedan
// 1. THIS.type sedan
// 2. this.type undefined
// 2. THIS.type sedan 

// Explanation with similar example

var aang = {
  element: 'air',
  greet: function() {
    console.log(
      "Hi! I'm Aang. I can do cool things with",
      this.element
    );

    (function () {
      console.log(
        'I can make a ball with',
        this.element
      );

       // logs 'I can make a ball with undefined'
      //  The function has to be a method (attached to the owner object)
      //  in order for `this` to represent the owner object

      console.log('this', this); // logs the global object (Window, in the browser)
    })();
  }
};

aang.boast = function () {
  console.log(
    'I can make a ball with',
    this.element
  );

  // logs 'I can make a ball with air'
  // this boast function is now a member of the aang object

  console.log('this', this); // logs the `aang` object
};

aang.greet();
aang.boast();
 