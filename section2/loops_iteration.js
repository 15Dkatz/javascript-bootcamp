// for loops.
// Three statements on one line.
for (var i = 0; i < 10; i++) {
  console.log('ping', i);
}

// while loops.
// Execute while a condition is true.
// Like a for loop, except the statements are on individual liens
var j = 0;

while (j < 10) {
  console.log('  pong', j);

  j++;
}

var n = 15;

// do while loops
// Like a while loop, except the body executes at least once
do {
  console.log('n is', n);
  n++;
} while (n < 10);