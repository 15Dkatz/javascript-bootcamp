// *** Question ***
console.log(1);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 0);
console.log(4);

// what is the output of the above?

// *** Answer ***
// 1
// 4
// 3
// 2

// *** Investigation ***

// output:
// 1
// (non-blocking setTimeout - the next line can execute)
// (non-blocking setTimeout - the next line can execute)
// 4
// 3 (the 0ms delay completes first)
// 2 (the 1000ms delay completes)