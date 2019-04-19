// Explicit type conversion

// For explicit number conversion, use the global Number wrapper:
Number('5'); // 5
// This is opposed to the implicit alternative: +'5'

// Explicit type conversion works for booleans, strings, arrays (and more)
Boolean(0) // false
String(12) // '12'
Array('foo', 'bar', 'goo') // ['foo', 'bar', 'goo]

// The global Date wrapper returns a Date representation
Date() // Thu Apr 18 2019 20:55:10 GMT-0700 (Pacific Daylight Time)
Date.now() // current time in milliseconds since Jan 1, 1970. For example: 1555646119603