var foo = 10;

if (foo == 13) {
  console.log('hello');
} else if (foo == 10) {
  console.log('greetings');
} else {
  console.log('goodbye');
}

switch(foo) {
  case 13:
    console.log('foo is 13');
    break;
  case 10:
    console.log('foo is 10');
    break;
  default:
    console.log('foo is something else');
}