const boomerang = new Promise((resolve, reject) => {
  // reject('stuck in a tree');

  setTimeout(() => {
    resolve('returned');
  }, 3000);
});

// The await keyword can be used to block asynchronous functionality
// Normally, JavaScript is non-blocking and executes the rest of the code
// as asynchronous code like promises are handled in the background.
// But the await keyword allows you to wait for the promise to resolve or reject
// before executing the following code

async function test() { // to use await, it must be in a function marked by the async keyword
  try { // try/catch is used to handle resolved/rejected promises
    const boomerangStatus = await boomerang; // this blocks the following console.log
    console.log('boomerangStatus', boomerangStatus);
  } catch(error) {
    console.log('error', error);
  }
}

test();
