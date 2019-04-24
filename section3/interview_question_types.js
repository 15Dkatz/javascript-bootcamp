// *** Question ***

// What do each of these lines evaluate to?

typeof typeof 1

"1" + "2"
1 + "2"
1 + +"2"
true + 1

1 < 2 < 3
3 > 2 > 1

typeof []

// *** Answer ***

typeof typeof 1 // "string"
// This is equivalent to:
// typeof (typeof 1)
// typeof "number"
// "string"

"1" + "2" // regular concatenation: evaluates "12"
1 + "2"   // implicit type conversion of the 1 to "1": evaluates "12"
1 + +"2"  // +"1", implicitly converts the string to a number: evaluates 3
true + 1  // true has the value of 1 (false: 0): evaluates 2

1 < 2 < 3 // equivalent to (1 < 2) < 3. equivalent to true < 3. true has a value of 1. evaluates true < 3: true
3 > 2 > 1 // equivalent to (3 > 2) > 1. equivalent to true > 1. true has a value of 1. evaluates true > 1: false

typeof [] // "object"
// Almost everything in JavaScript is an object

// *** see almost_everyyhing_is_an_object.js in this directory for a deeper explanation
