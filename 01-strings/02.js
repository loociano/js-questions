/**
 * Problem 1.2
 * 
 * Implement a function reverse with reverses a string
 *
 * Questions I'd ask:
 * - What if input is null or empty or not string?
 * 
 * Tests:
 * reverse('abc') // cba
 * reverse('aabb') // bbaa
 * reverse(null) // null
 * reverse('') // ''
 * reverse(1) // 1
 */

/** @param {string}
 *  @return {string} reversed string, same input if not a string */
function reverse(string){
  if (typeof string !== 'string' || !string){
    return string;
  }

  var letters = [];
  for (var i = string.length; i >= 0; i--){
    letters.push(string.charAt(i));
  }
  return letters.join('');
}

if(typeof exports !== 'undefined') {
    exports.reverse = reverse;
}