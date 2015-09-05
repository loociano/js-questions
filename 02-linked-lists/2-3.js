/**
 * Exercise 2.3
 * 
 * Implement an algorithm to delete a node in the middle of
 * a singly linked list, given only access to that node.
 * Example:
 * - Input: node c from a->b->c->d->e
 * - Result: nothing is returned, but the new linked list is a->b->d->e
 *
 * Questions I'd ask:
 * Would 'In the middle' be any node but the first and last ones?
 *
 * Test's I'd do
 */

/** @param {Object} node ref */
function deleteNode(node) {

  if (node == null || node.next == null) return;

  node.setData(node.next.getData());
  node.next = node.next.next;
}


if(typeof exports !== 'undefined') {
    exports.deleteNode = deleteNode;
}
