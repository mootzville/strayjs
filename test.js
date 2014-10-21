var stray = require('./stray');

var customSet = {
  set: '!@#$%^&*()',
  size: 12
};

var varySize = {
  set: 'bin',
  size: {min: 8, max: 32}
};

var phone = {
  set: 'num',
  size: 10,
  insert: [
    {chars: '(', position: 0},
    {chars: ')', position: 3},
    {chars: '-', position: 6}
  ]
};

console.log('stray()                     --> ', stray());
console.log('set: "alpha"                --> ', stray({set: 'alpha'}));
console.log('set: "!@#$%^&*()"           --> ', stray(customSet));
console.log('set: "dna", size: 16        --> ', stray({set: 'dna', size: 16}));
console.log('size: {"min": 8, "max": 32} --> ', stray(varySize));
console.log('Phone Number:               --> ', stray(phone));