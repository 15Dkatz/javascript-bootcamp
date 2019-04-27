// A function factory returns a custom function
// The returned function is a closure

function makeSuffixer(suffix) {
  const separator = ' ';

  function addSuffix(word) {
    return word + separator + suffix;
  }

  return addSuffix;
}

const addLy = makeSuffixer('ly'); // the result is a returned closure
console.log('addLy', addLy);

const smartly = addLy('smart');
console.log('smartly', smartly);

const addNess = makeSuffixer('ness');  // the result is a returned closure
const awesomeness = addNess('awesome');
console.log('awesomeness', awesomeness);
