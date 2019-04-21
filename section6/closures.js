// Closures are a combination of an inner function and its environment.
// The environment consists of three scopes:
//   1. global scope
//   2. outer function's scope
//   3. its own inner scope

// ***
// global scope

function outer() {
  // outer scope
  let username = '';
  let password = '';

  // function innerClosure() {
  //   // inner scope
  //   username = 'drew';
  //   console.log('username', username);
  // }

  // private closure
  function setUsername(newUsername) {
    username = newUsername;
  }

  // private closure
  function setPassword(newPassword) {
    password = newPassword;
  }

  return {
    signup: function(user, pass) {
      setUsername(user);
      setPassword(pass);
    },
    debug: function() {
      console.log('username', username, 'password', password);
    },
    signin: function(user, pass) {
      return (user === username) && (pass === password);
    }
  };
}

const account = outer();
account.signup('jerry', 'foo123');

console.log(account); //  signup: [Function], debug: [Function], signin: [Function] }

account.debug(); // username jerry password foo123

const attempt1 = account.signin('jerry', 'foo123'); // true
const attempt2 = account.signin('hackr', 'fo1234'); // false

