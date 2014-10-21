module.exports = function (params) {

  "use strict";

  var  stringSets = require('./stringSets');

  function varySize (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateString(stringSet, stringSize, stringMod) {
    var string = '';
    for ( ; string.length < stringSize ; ) {
      string += stringSet.charAt(Math.floor(Math.random() * stringSet.length));
    }
    if (stringMod) string = insertChars(string, stringMod);
    return string;
  }

  function insertChars(string, modObj) {
    modObj
      .sort(function(a, b){return b.position-a.position})
      .forEach(function(insert, index, arr) {
        string = string.substring(0, insert.position) + insert.chars + string.substr(insert.position);
      });
    return string;
  }

  function main() {
    var strSet, strSize, strMod;
    strSet = params ? ( !stringSets[params.set] ? params['set'] : stringSets[params.set] ) || stringSets['alnum'] : stringSets['alnum'];
    strSize = params ? params.size || 10 : 10;
    strMod = params ? params.insert || null : null;
    if (typeof strSize === 'object') strSize = varySize(strSize.min, strSize.max);
    return generateString(strSet, strSize, strMod);
  }

return main();

};