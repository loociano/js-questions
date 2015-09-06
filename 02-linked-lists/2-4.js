/**
 * Exercise 2.4
 * 
 * Write code to partition a linked list around a value x, 
 * such that all nodes less than x come before all nodes 
 * greater than or equal to x.
 *
 * Questions
 * What if x is not a number? 
 * - Assume number
 * Should the output be ordered in a certain way?
 * - Assume same order as input
 *
 * Tests:
 * 2->5->1->7->3->null  x = 5 ---> 2->1->3->null 5->7->null
 * 2->5->1->7->3->null  x = 7 ---> 2->5->1->3->null 7->null
 * 2->5->1->7->3->null  x = 10 --> 2->5->1->7->3->null
 * 2->5->1->7->3->null  x = 0 ---> 2->5->1->7->3->null
 *
 * invalid input, x = 'a' --> return
 */

/** @param {number} x 
    @return {string} stringifyed linked list(s) */
Node.prototype.partition = function(x){

  if (typeof x !== 'number') return;

  var n = this; // head
  var head1 = null;
  var head2 = null;

  while (n !== null){

    if (n.d < x){
      head1 = this.createOrAppend(head1, n.d);
    } else {
      head2 = this.createOrAppend(head2, n.d);
    }
    n = n.next;
  }

  var result = [];

  if (head1 !== null){
    result.push(head1.toListString());
  }

  if (head2 !== null){
    result.push(head2.toListString());
  }
  return result.join(' ');
}

/** @param {Node} head
    @param {Object} data
    @return {Node} head */
Node.prototype.createOrAppend = function(head, data){
  if (head !== null){
    head.appendToTail(data);
  } else {
    head = new Node(data);
  }
  return head;
}