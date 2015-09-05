/**
 * JavaScript linked list
 */

/** @param {Object} data */
function Node(d){
  this.d = d;
  this.next = null;
}

/** @param {Object} data */
Node.prototype.appendToTail = function(d) {
  var end = new Node(d);
  var n = this; // this == head

  while (n.next !== null){
    n = n.next;
  }
  n.next = end;
}

/** @return {Object} data */
Node.prototype.getData = function(){
  return this.d;
}

/** @return {String} stringifyied linked list, 
  * for example a->b->c->null */
Node.prototype.toString = function(){
  var n = this;
  var output = [];

  while (n.next !== null){
    output.push(n.getData());
    n = n.next;
  }
  output.push(n.getData()); // last node
  output.push('null');

  return output.join('->');
}


/** @param {Node} head
    @param {Object} data 
    @return {Node} head */
Node.prototype.removeNode = function(d){

  var head = this;
  var n = head; // assuming invoked from head

  if (n.getData() === d){
    return head.next;
  }

  while (n.next !== null){
    if (n.next.getData() === d){
      n.next = n.next.next;
      return head;
    }
    n = n.next;
  }
  return head;
}


if(typeof exports !== 'undefined') {
    exports.Node = Node;
}