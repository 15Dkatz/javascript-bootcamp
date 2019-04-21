// Higher order functions
const numbers = [1, 2, 3];

const callback = number => {
  console.log('number', number);
};

// forEach is a higher-order function
// it takes a callback function as an argument
numbers.forEach(callback);

// lessThan is a higher-order function
// it returns a function
function lessThan(y) {
  return function(x) {
    return x < y;
  }
}

const lessThan30 = lessThan(30);
lessThan30(20);
