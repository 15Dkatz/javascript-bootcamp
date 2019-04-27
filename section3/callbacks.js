// *** Example 1 ***

function logMessage() {
  console.log('greetings');
}

function printMessages(callback) {
  callback();
}

// logMessage becomes a callbck
printMessages(logMessage);

// *** Example 2 ***

var numbers = [1, 3, 5, 7, 9];

function logNumber(number) {
  console.log('number', number);
}

// Passing in a callback to an out-of-the box function
numbers.forEach(logNumber);

// a custom version of forEach
function forEach(array, callback) {
  for (var index=0; index<array.length; index++) {
    var item = array[index];

    callback(item);
  }
}

forEach(numbers, number => console.log('number', number));
