/** JavaScript Queue, using an array (trivial) */
function Queue(){
  this._queue = [];
}

Queue.prototype = {

    /** @param {Object} d */
    enqueue: function(d){
      this._queue.push(d);
    },

    /** @return {Object} d */
    dequeue: function(){
      var result = this._queue[0];

      // I know, shift() is an expensive operation. 
      // We could perform better by keeping an internal offset
      // and using slice() when the offset reaches the end of the queue.
      // http://code.stephenmorley.org/javascript/queues/ 
      this._queue.shift();

      return result;
    },

    size: function(){
      return this._queue.length;
    }
}

if(typeof exports !== 'undefined') {
    exports.Queue = Queue;
}