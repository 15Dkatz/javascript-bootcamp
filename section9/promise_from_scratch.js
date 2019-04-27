// This promise resolves half of the time,
// and rejects the other half of the time
const flip = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve('success');
  } else {
    reject('failure');
  }
});

// .then handles resolved promises
// .catch handles rejected promises
flip
  .then(result => console.log('result', result))
  .catch(error => console.log('error', error));

// Promises are handled asynchronously.
// So even though this log appears after in the code,
// it will be the first log to have output.
console.log('after flip');

// Output:
// after flip
// => undefined (Repl's evaluation)
// error failure

// Or the output can be:
// after flip
// result success
// => undefined (Repl's evaluation)