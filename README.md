# StrayJS | The Flexible String Generator

## How it works:


### Simple Example
```
// Bring in the module
var stray = require('stray');

// Create some random strings
// By default, stray will generate
// alphanum strings 10 chars long
// when given no params

var rndStr = stray();
console.log(rndStr); // F8AFmfuDzx
```

### Options Object

StrayJS accepts an options object as it's only argument.

Here are the default settings from the example above:

```
var options = {
  set: 'alnum',
  size: 10,
  insert: null
}
```

### Options Object Params

Here is all you need to know about the params:

set - The 'set' param specifies the string set to use for generating the string.
      
      The built-in sets are:
        alnum = Alphabet (Uppercase & Lowercase) + Numbers (0 to 9)
        num = Numbers (0 to 9)
        alpha = Alphabet (Uppercase & Lowercase)
        bin = Binary (0 and 1)
        hex = Hexadecimal (A to F & 0 to 9)
        dna = DNA Letters (a,c,g,t)
        ascii = All* ascii printable characters (~ 94 Characters)
          * The space (aka ' ') is not included in the ascii set
            though it is considered a printable character.

      You can also specify your own set by simply passing the string set you wish
      to use as the value.  E.G. "set": "!@#$%^&*()"

size - The 'size' param can be either a Number or an Object
      
       As a Number, stray will obviously generate a string of that length.

       Pass an object with 'min' & 'max' params for variable length strings.
       E.G. "size": {"min": 1, "max": 10} // string will be 1 to 10 chars in length

insert - The 'insert' param is an array of objects that specifies
         static characters you want inserted into the string.
         Each object consists of 2 params: 'chars' & 'position'
         The 'chars' is/are the character(s) you want to insert.
         The 'position' is where in the string you want to insert.

         *** The 'insert' param is experimental and may change in the future ***
         *** Don't pass multiple objects with the same 'position' param ***
         *** Well, you can but it may not insert the chars how you'd expect ***

### Generate & Format Some Phone Numbers (USA)
```
var stray = require('strayjs'),
    phone = {
      "set": "num",
      "size": 10,
      "insert": [
        {"chars": '(', "position": 0},
        {"chars": ')', "position": 3},
        {"chars": '-', "position": 6}
      ]
    };

var phoneNum1 = stray(phone),
    phoneNum2 = stray(phone),
    phoneNum3 = stray(phone);

console.log(phoneNum1); // (203)222-8585
console.log(phoneNum2); // (968)676-3774
console.log(phoneNum3); // (412)824-8847
```

Run 'test.js' and check out it's source for a few other examples.

Check out stringSets.js for the built-in sets.  Add to it if you'd like.