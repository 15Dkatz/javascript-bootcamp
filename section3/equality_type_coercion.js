console.log(1 == 1); // true
console.log(1 == '1'); // true
// The double equals operator coerces the string to a number, and then checks.
// This is loose equality.

console.log(1 === '1') // false
// The triple equals operator does not do type coercion.
// This is strict equality.

// examples of type coercion:
1 + '2'   // '12'   | string -> number
+'9'      // 9      | string -> number
+'-0.301' // 0.301  | string -> number
+'foo'    // NaN
!true     // false  | actually, only a boolean -> boolean
!false    // true   | actually, only a boolean -> boolean
4 > '9'   // false  | string -> number ('9' --> 9)
false + 1 // 1      | boolean -> number (false -> 0)
true + 1  // 2      | boolean -> number (true -> 1)
