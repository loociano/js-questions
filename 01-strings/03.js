/**
 * Problem 1.3
 *
 * Given two strings, write a method to decide if one is a 
 * permutation of the other
 *
 * Questions I'd ask:
 * - What if the input is null, empty string or not string?
 *  Let's assume it returns false
 * - What if one string is shorter?
 *  Let's assume it return false
 * - What is both strings are the same?
 *  Let's assume it returns true
 * 
 * Tests:
 * f('abc', 'cba') // true
 * f('abc', 'ab') // false
 * f('abc', 'def') // false
 * f('aaa', 'aaa') // true
 * f('abc', null) // false
 * f('abc', 1) // false
 * f('abc', '') // false
 */

/** @param {string1}
    @param {string2}
    @return {boolean} true if strings are permutations  */
function isPermutation(string1, string2){
  if (typeof string1 !== 'string' || typeof string2 !== 'string' || !string1 || !string2){
    return false;
  }

  if (string1.length !== string2.length){
    return false;
  }

  for (var i = 0; i < string1.length; i++){

    var char1 = string1.charAt(i), char2 = string2.charAt(i); 
    if (string2.indexOf(char1) < 0 || string1.indexOf(char2) < 0){ // not very efficient...
      return false;
    }
  }
  return true;
}

if(typeof exports !== 'undefined') {
    exports.isPermutation = isPermutation;
}