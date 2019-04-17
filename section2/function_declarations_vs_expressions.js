// function declaration
function calculateTip(price, percentage) {
  // side effects
  console.log('calculate tip');

  return (percentage/100) * price;
}

// function expression
var divideByN = function(number, n) {
  return number/n;
}

// anonymous function
(function() {
  console.log('I am an anonymous function expression');
}());
