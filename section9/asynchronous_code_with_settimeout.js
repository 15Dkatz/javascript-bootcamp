// setTimeout takes two parameters:
//   1) a callback function
//   2) a timer delay (in milliseconds) 
const timeoutId = setTimeout(
  () => console.log('bonjour'),
  2000
);

// logs 'bonjour' after 2 seconds.

// ***
// The asynchronous setTimeout is placed into a queue in the background
// It's functionality (the callback) will fire once the rest of the
// synchronous code is complete.
//
// This means the timeoutId log will occur before bonjour.
// Output:
//   timeoutId 1
//   bonjour
const timeoutId = setTimeout(
  () => console.log('bonjour'),
  1000
);

console.log('timeoutId', timeoutId);

// ***
// The asynchronous setTimeout is placed into a queue in the background
// It's functionality (the callback) will fire once the rest of the
// synchronous code is complete.
//
// Part of that asynchronous code is a clearTimeout which removes
// the original timeout.
// So in this chunk, the callback never fires.
// It's immediately cleared.
const timeoutId = setTimeout(
  () => console.log('bonjour'),
  0
);

clearTimeout(timeoutId);

console.log('timeoutId', timeoutId);
