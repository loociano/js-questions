/**
 * Problem 1.1
 * Implement an algorithm to determine if a string has all unique
 * characters. What if you cannot use additional data structures?
 * 
 * Question I'd ask:
 * - What is the character encoding? ASCII? Unicode? 
 * - Can the string be null? Empty? What if it's a number?
 * 
 * Assumptions:
 * - String contain only letters, spaces or symbols are not allowed
 * - If string is null, undefined or empty, return false.
 *
 * Test:
 * f('abc') // true
 * f('aaa') // false
 * f(null) // false
 * f('') // false
 * f('my name') // false (because of space)
 * f(1) // false (invalid input)
 * f(NaN) // false (invalid input)
 */

/** 
 * @param {string}
 * @return {boolean}
 */ 
function hasAllUniqueCharacters(string){

  var alphabet = 'abcdefghijklmnopqrstuvwxyz'; // assumption
  
  if (!string || typeof string !== 'string'|| string.length > alphabet.length) {
    return false;
  }

  for (var i = 0, l = string.length; i < l; i++){
    var letter = string.charAt(i);
    var index = alphabet.indexOf(letter);
    if (index > -1){
      alphabet = alphabet.slice(0, index) + alphabet.slice(index + 1); // too much memory allocation
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Second solution
 * Suggested by the book, with a bit checker
 *
 * JS uses 32-bit signed integers for bitwise comparisons
 */
function hasAllUniqueCharacters2(string){

  if (!string || typeof string !== 'string'|| string.length > 32) {
    return false;
  }

  var checker = 0; // 32-bit checker for the alphabet 
  
  for (var i = 0, l = string.length; i < l; i++){
    
    var val = string.charCodeAt(i) - 'a'.charCodeAt(); // a=0, b=1...

    if ((checker & (1 << val)) > 0){
        return false;
    }
    checker |= (1 << val);
  }
  return true;
}

/**
 * Highlights:
 * Bitwise operations in JS: & | << ...
 * Cost of concatenating strings
 * Difference between:
 *  1. slice(startI [,endI])
 *  2. substr(startI [, endI]) <--- swaps the indexes if startI < endI
 *  3. substring(startI, length) <--- length!
 * 
 * string.charCodeAt() to get the ASCII Character Code
 */

if(typeof exports !== 'undefined') {
    exports.hasAllUniqueCharacters = hasAllUniqueCharacters;
    exports.hasAllUniqueCharacters2 = hasAllUniqueCharacters2;
}