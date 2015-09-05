/**
 * Exercise 2.5
 *
 * You have two numbers represented by a linked list, where each node contains a
 * single digit. The digits are stored in reverse order, such that the 1s digit is at the
 * head of the list. Write a function that adds the two numbers and returns the sum
 * as a linked list.
 *
 * Example (2 LL): (7 -> 1 -> 6) + (5 -> 9 -> 2)    617 + 295
 * Output (1 LL): 2 -> 1 -> 9
 *
 * Tests:
 * Sum numbers without same number of digits
 *
 * Questions:
 * - Can I have access to the head as input?
 * - What if one input is null?
 * - What if the node do not contain numbers?
 */
function sumDigitsLL(head1, head2){

  if (head1 === null){
    if (head2 === null){
      return null;
    } else {
      return head2;
    }
  } else {
    if (head2 === null){
      return head1;
    }
  }

  var n1 = head1;
  var n2 = head2;

  var result = new Node();
  var remainder = 0;

  while ( n1 !== null || n2 !== null ){
    
    var data1 = n1 !== null ? n1.getData() : 0;
    var data2 = n2 !== null ? n2.getData() : 0;

    if (typeof data1 === 'number' && typeof data2 === 'number'){
      
      var sum = data1 + data2;
      if (remainder > 0){
        sum += remainder;
        remainder--;
      }

      var rest = sum % 10;
      if (sum >= 10){
        var digit = rest;
        remainder++;
      } else {
        var digit = sum;
      }
      
      if (result.getData() === null){
        result.setData(digit); // first digit
      } else {
        result.appendToTail(digit);
      }
    } 
    
    n1 = n1 === null ? n1 : n1.next;
    n2 = n2 === null ? n2 : n2.next;
  }
  return result;
}

if(typeof exports !== 'undefined') {
    exports.sumDigitsLL = sumDigitsLL;
}
