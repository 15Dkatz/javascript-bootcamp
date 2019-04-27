// *** Question ***

// write functions `logMessage` and `greet`
// such that the following line logs 'hi'

logMessage(greet(() => greet(() => 'hi')));

// *** Answer ***

function logMessage(message) {
  console.log(message);
}

function greet(callback) {
  return callback();
}

// var returnHi = () => 'hi';
// greet(returnHi);

// no need for the returnHi variable. Pass the callback inline
// greet(() => 'hi'); // 'hi'

// Notice how the input to logMessage in the question can be broken down:
// greet(() => greet(() => 'hi'));
// greet(() => 'hi');
// 'hi'