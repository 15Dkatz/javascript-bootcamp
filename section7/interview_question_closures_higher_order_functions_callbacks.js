// *** Question ***
// Write a function sum

sum(1)(2)(3)(4)(5)(result => console.log('result', result));

// such that the above would log "result 15"

// *** Answer ***
function sum(a) {
  // outer scope
  return function(b) {
    // inner scope
    return function(c) {
      return function(d) {
        return function(e) {
          const total = a + b + c + d + e;

          return function(callback) {
            callback(total);
          }
        }
      }
    }
  };
}

// *** Investigation ***

function sum(a) {
  return function(b) {
    return a + b;
  }
}

// Returns a closure.
// The closure encloses its environment.
// The closure environment consists of the global scope, outer function scope, and inner scope

// the above returns 3 for sum(1)(2);

// Extending this pattern you get:

function sum(a) {
  // outer scope
  return function(b) {
    // inner scope
    return function(c) {
      return function(d) {
        return function(e) {
          return a + b + c + d + e;
        }
      }
    }
  };
}

sum(1)(2)(3)(4)(5); // evaluates to 15

// Investigation part 2

// The following executes a callback with a parameter

function executeArgument(callback) {
  const innerResult = 99;

  callback(innerResult);
}

executeArgument(result => console.log('result', result));

// this would log "result 99"

// Combinining the above concepts, you get the solution:

function sum(a) {
  // outer scope
  return function(b) {
    // inner scope
    return function(c) {
      return function(d) {
        return function(e) {
          const total = a + b + c + d + e;

          return function(callback) {
            callback(total);
          }
        }
      }
    }
  };
}