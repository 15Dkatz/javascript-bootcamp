// The fetch method allows you to conduct api requests
// The response is a Promise object

// A promise returns either a successful or failed value for
// functionality that completes after an unknown amount of time.

// It's perfect for an api fetch, where the speed of the response
// depends on network connection.

// You handle promises by chaining .then handlers
// These take callback functions, which fire when the promises's
// functionality is complete

fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => {
    return response.json();
  })
  .then(json => console.log('json', json));

// Note that the fetch is asynchronous. These logs that appear
// after in the code, will appear first in the output.

console.log('after fetch');
console.log('after fetch 2');

// Output:
// after fetch
// after fetch 2
// => undefined (Repl's evaluation)
// json { id: 68,
//   type: 'general',
//   setup: 'I Started A New Business Making Yachts In My Attic This Year...',
//   punchline: 'The sails are going through the roof.'
// }