/**
 * Problem 1.1
 * Write a function that determines if a string has 
 * all unique characters.
 * 
 * Question I'd ask:
 * - What is the character encoding? ASCII? Unicode? 
 * - Can the string be null? Empty?
 * 
 * Assumptions:
 * - String contain only letters
 * - If string is null, undefined or empty, return false.
 *
 * Tests:
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

// Tests
console.log("Testing hasAllUniqueCharacters(string)");
console.assert(hasAllUniqueCharacters('abc') === true, "FAILED: abc has unique characters");
console.assert(hasAllUniqueCharacters('aabbcc') === false, "FAILED: aabbcc has duplicated characters");
console.assert(hasAllUniqueCharacters('aaa') === false, "FAILED: aaa has duplicated characters");
console.assert(hasAllUniqueCharacters(null) === false, "FAILED: string is null");
console.assert(hasAllUniqueCharacters('') === false, "FAILED: string is empty");
console.assert(hasAllUniqueCharacters('my name') === false, "FAILED: string contains invalid characters");
console.assert(hasAllUniqueCharacters(1) === false, "FAILED: input is not a string");
console.assert(hasAllUniqueCharacters(NaN) === false, "FAILED: input is NaN");


/**
 * Second solution
 * Suggested by the book, with a bit checker
 *
 * It is not possible to implement exactly the same 256 bit checker in JavaScript,
 * as JavaScript performs bitwise comparison using signed 32-bit integers.
 * We will need to use 256 / 32 = 8 integers.
 */
function hasAllUniqueCharacters2(string){
  var bitArray = [0, 0, 0, 0, 0, 0, 0, 0]; // 32x8 = 256 bits

  if (!string || typeof string !== 'string'|| string.length > 256) {
    return false;
  }
  
  for (var i = 0, l = string.length; i < l; i++){
    var charCode = string.charCodeAt(i);

    var slot = charCode % 32;

    if (bitArray[slot] & (1 << charCode) > 0){
        return false;
    }
    bitArray[slot] |= (1 << charCode);
  }
  return true;
}

// Tests
console.log("Testing hasAllUniqueCharacters2(string)");
console.assert(hasAllUniqueCharacters2('abc') === true, "FAILED: abc has unique characters");
console.assert(hasAllUniqueCharacters2('aabbcc') === false, "FAILED: aabbcc has duplicated characters");
console.assert(hasAllUniqueCharacters2('aaa') === false, "FAILED: aaa has duplicated characters");
console.assert(hasAllUniqueCharacters2(null) === false, "FAILED: string is null");
console.assert(hasAllUniqueCharacters2('') === false, "FAILED: string is empty");
console.assert(hasAllUniqueCharacters2('my name') === false, "FAILED: string contains invalid characters");
console.assert(hasAllUniqueCharacters2(1) === false, "FAILED: input is not a string");
console.assert(hasAllUniqueCharacters2(NaN) === false, "FAILED: input is NaN");


/**
 * Highlights:
 * Bitwise operations in JS: & | <<...
 * Cost of concatenating strings
 * Difference between:
 *  slice(startI [,endI])
 *  substr(startI [, endI])
 *  substring(startI, length)
 * 
 * string.charCodeAt() to get the ASCII Character Code