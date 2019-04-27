// *** Question ***

// What is the output of:
let x = 'red';

{
 let x = 'green';

 console.log('1: ', x);

 (function() {
   console.log('2: ', x);

   var x = 'blue';

   console.log('3: ', x);
 })();
}

console.log('4: ', x);

// *** Answer ***

// 1:  green
// 2:  undefined
// 3:  blue
// 4:  red

// *** Explanation ***

let x = 'red';

{
  // let variables are scoped by code blocks
  // so they can be re-declared
  let x = 'green';

  console.log('1: ', x); // 'green'
  
  (function() {
    // var x; // implicit declaration due to hoisting. x is undefined

    console.log('2: ', x); // undefined

    var x = 'blue'; // the var keyword is hoisted according to the function scope

    console.log('3: ', x); // 'blue'
  })();
}

console.log('4: ', x); // 'red'