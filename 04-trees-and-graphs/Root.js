/** Binary tree */
function Root(d){
  this.d = d;
  this.left = null;
  this.right = null;
}

Root.prototype.add = function(d){

  var current = this;
  var newNode = new Root(d);

  while(true){
    
    if (d < current.d){
      if (current.left === null){
        current.left = newNode;
        break;
      } else {
        current = current.left;
      }
    } else if (d > current.d) {
      if (current.right === null){
        current.right = newNode;
        break;
      } else {
        current = current.right;
      }
    } else {
      break; // value already in tree
    }
  } 
}

/** @return {string} stringifyed binary tree */
Root.prototype.toString = function(){

  var current = this;
  var string = '';

  var array = [];
  current.traverse(array);

  return array.join(',');
}

/** Helper function to traverse the tree recursively */
Root.prototype.traverse = function(array){
  
  var node = this;

  array.push(node.d);

  if (node.left !== null){
    node.left.traverse(array);
  }

  if (node.right !== null){
    node.right.traverse(array);
  }
}


if(typeof exports !== 'undefined') {
    exports.Root = Root;
}