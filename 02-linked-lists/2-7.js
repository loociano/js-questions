/**
 * Exercise 2.7
 * 
 * Implement a function to check if a linked list is a palindrome
 *
 * Questions I'd ask:
 * - Any restrictions on the linked list? Can I access the head node? 
 *
 * Assumptions:
 * - Single node is palindrome
 *
 * Tests:
 * f(a->b->a->null) // true
 * f(a->null) // true
 * f(a->b->c->b->a->null) // true
 * f(a->b->c->a->null) // false
 * f(a->b->c->d->null) // false
 */

Node.prototype.isPalindrome = function(){

  var n = this; // assumed called from head

  var stack = [];

  while ( n !== null){
    stack.push(n.getData());
    n = n.next;
  }

  var isOdd = stack.length % 2 > 0;
  var length = isOdd ? Math.floor(stack.length / 2) : stack.length / 2;

  for (var i = 0; i < length; i++){
    if (stack[i] !== stack[stack.length-1-i]){
      return false;
    }
  }
  return true;
}