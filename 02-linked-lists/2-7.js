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

/** Book solution with slow and fast runner */
Node.prototype.isPalindrome2 = function(){

  var slow = this;
  var fast = this;

  var stack = [];

  while ( fast !== null && fast.next !== null){
    stack.push(slow.getData());
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast !== null){ // has odd number of nodes, let slow skip middle node
    slow = slow.next;
  }

  while (slow !== null){
    var top = stack.pop();
    if (top !== slow.getData()){
      return false;
    }
    slow = slow.next;
  }
  return true;
}