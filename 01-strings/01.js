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
console.assert(hasAllUniqueCharacters('abc') === true, "FAILED: abc has unique characters");
console.assert(hasAllUniqueCharacters('aabbcc') === false, "FAILED: aabbcc has duplicated characters");
console.assert(hasAllUniqueCharacters('aaa') === false, "FAILED: aaa has duplicated characters");
console.assert(hasAllUniqueCharacters(null) === false, "FAILED: string is null");
console.assert(hasAllUniqueCharacters('') === false, "FAILED: string is empty");
console.assert(hasAllUniqueCharacters('my name') === false, "FAILED: string contains invalid characters");
console.assert(hasAllUniqueCharacters(1) === false, "FAILED: input is not a string");
console.assert(hasAllUniqueCharacters(NaN) === false, "FAILED: input is NaN");