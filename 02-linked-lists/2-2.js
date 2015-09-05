/**
 * Exercise 2.2
 * 
 * Implement an algorithm to find the kth to last element 
 * of a singly linked list.
 *
 * Questions I'd ask:
 * Signature of the function?
 *
 * Tests I'd do:
 * a->b->c->null  f(0) // c
 *                f(1) // b
 *                f(2) // a
 *                f(-1) // null
 *                f(4) // a
 */

/** @param {int} k steps from last element */
 Node.prototype.findKthToLast = function(k){

  if (k < 0) return null;

  var n = this;
  var length = 0;

  // Compute list length
  while (n.next !== null){
    length++;
    n = n.next;
  }

  var n = this;

  var steps = length - k;
  while (steps > 0) {
    n = n.next;
    steps--;
  }
  return n;
 }