/** 
 * Exercise 2.6
 *
 * Given a circular linked list, implement an algorithm which returns the node at
 * the beginning of the loop.
 * 
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points
 * to an earlier node, so as to make a loop in the linked list.
 *
 * EXAMPLE
 * Input: A - > B - > C - > D - > E - > C [the same C as earlier]
 * Output: C
 *
 * Questions: what if the input linked list is not circular?
 * - Assume it will return null
 *
 */
Node.prototype.findLoopNode = function(){
  
  var n = this;

  var hashtable = {};

  while (n !== null){

    var data = n.d;

    if (hashtable[data]){
      return data;
    }
    hashtable[n.d] = data;
    n = n.next;
  }
  return null;
}