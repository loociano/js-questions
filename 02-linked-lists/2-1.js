/**
 * Exercise 2.1
 * 
 * Write code to remove duplicates from an unsorted linked list.
 *
 * Questions I'd ask:
 * What is the I/O of the function? 
 *
 * Assumptions:
 * (trivial) If no duplicates, no changes on the linked list
 * The method is called from the head
 * The method returns void 
 *
 * Test I'd do:
 * Given 2->3->1->null f(head) --> 2->3->1->null
 * Given 2->2->1->3->null, f(head) --> 2->1->3->null
 * Given 2->2->1->1->3->2->null, f(head) --> 2->1->3->null 
 */

Node.prototype.removeDuplicates = function(){

  var head = this;
  var n = head; // assuming method is called from head
  var temp = {}; // to store data to detect duplicates.

  while (n.next !== null){

    var d = n.getData();

    if (temp[d]){ // will not work well if d is null
      n.setData(null); // tag node to remove by removing its data
      n = head.removeNode(null); // restart from head, not very efficient?
      temp = {}; // reset

    } else {
      temp[d] = d;
      n = n.next;
    }
  }

  // Last node
  var d = n.getData();

  if (temp[d]){
    n.setData(null);
    head.removeNode(null);
  }
}