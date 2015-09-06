var assert = require('assert');

var code = require('../01-strings/01');
hasAllUniqueCharacters = code.hasAllUniqueCharacters;
hasAllUniqueCharacters2 = code.hasAllUniqueCharacters2;

code = require('../01-strings/02');
reverse = code.reverse;

code = require('../01-strings/03');
isPermutation = code.isPermutation;
isPermutation2 = code.isPermutation2;
sort = code.sort;

code = require('../02-linked-lists/Node');
Node = code.Node;

require('../02-linked-lists/2-1');
require('../02-linked-lists/2-2');

code = require('../02-linked-lists/2-3');
deleteNode = code.deleteNode;

require('../02-linked-lists/2-4');

code = require('../02-linked-lists/2-5');
sumDigitsLL = code.sumDigitsLL;

require('../02-linked-lists/2-6');

require('../02-linked-lists/2-7');

code = require('../04-trees-and-graphs/Root');
Root = code.Root;

describe('Strings - Exercise 1.1', function(){
    describe('First Solution', function(){
        it('abc has unique characters', function(){
            assert.equal(true, hasAllUniqueCharacters('abc'));
        });
        
        it('aabbcc has duplicated characters', function(){
            assert.equal(false, hasAllUniqueCharacters('aabbcc'));
        });
        
        it('aaa has duplicated characters', function(){
            assert.equal(false, hasAllUniqueCharacters('aaa'));
        });

        it('string is null', function(){
            assert.equal(false, hasAllUniqueCharacters(null));
        });

        it('string is empty', function(){
            assert.equal(false, hasAllUniqueCharacters(''));
        });

        it('string contains invalid characters', function(){
            assert.equal(false, hasAllUniqueCharacters('my name'));
        });

        it('input is not a string', function(){
            assert.equal(false, hasAllUniqueCharacters(1));
        });

        it('input is NaN', function(){
            assert.equal(false, hasAllUniqueCharacters(NaN));
        });
    });

    describe('Second Solution', function(){
        it('abc has unique characters', function(){
            assert.equal(true, hasAllUniqueCharacters2('abc'));
        });
        
        it('aabbcc has duplicated characters', function(){
            assert.equal(false, hasAllUniqueCharacters2('aabbcc'));
        });
        
        it('aaa has duplicated characters', function(){
            assert.equal(false, hasAllUniqueCharacters2('aaa'));
        });

        it('string is null', function(){
            assert.equal(false, hasAllUniqueCharacters2(null));
        });

        it('string is empty', function(){
            assert.equal(false, hasAllUniqueCharacters2(''));
        });

        it('string contains invalid characters', function(){
            assert.equal(false, hasAllUniqueCharacters2('my name'));
        });

        it('input is not a string', function(){
            assert.equal(false, hasAllUniqueCharacters2(1));
        });

        it('input is NaN', function(){
            assert.equal(false, hasAllUniqueCharacters2(NaN));
        });
    });
});

describe('Strings - Exercise 1.2', function(){
    it('abc reverses to cba', function(){
        assert.equal('cba', reverse('abc'));
    });

    it('aabb reverses to bbaa', function(){
        assert.equal('bbaa', reverse('aabb'));
    });

    it('null reverses to null', function(){
        assert.equal(null, reverse(null));
    });

    it('empty string reverses to empty string', function(){
        assert.equal('', reverse(''));
    });

    it('a non string returns the same value', function(){
        assert.equal(1, reverse(1));
    });
});

describe('Strings - Exercise 1.3', function(){
    describe('First Solution', function(){
        it('abc is permutation of cba', function(){
            assert.equal(true, isPermutation('abc', 'cba'));
            assert.equal(true, isPermutation('cba', 'abc'));
        });

        it('abc is not a permutation of ab', function(){
            assert.equal(false, isPermutation('abc', 'ab'));
            assert.equal(false, isPermutation('ab', 'abc'));
        });

        it('abc is not a permutation of def', function(){
            assert.equal(false, isPermutation('abc', 'def'));
            assert.equal(false, isPermutation('def', 'abc'));
        });

        it('aaa is a permutation of aaa', function(){
            assert.equal(true, isPermutation('aaa', 'aaa'));
        });

        it('abc is not a permutation of null', function(){
            assert.equal(false, isPermutation('abc', null));
            assert.equal(false, isPermutation(null, 'abc'));
        });

        it('abc is not a permutation of 1', function(){
            assert.equal(false, isPermutation('abc', 1));
            assert.equal(false, isPermutation(1, 'abc'));
        });

        it('abc is not a permutation of empty string', function(){
            assert.equal(false, isPermutation('abc', ''));
            assert.equal(false, isPermutation('', 'abc'));
        });
    });
    describe('Second Solution', function(){

        describe('Sort function', function(){
            it('fedcba is sorted to abcdef', function(){
                assert.equal('abcdef', sort('fedcba'));
            });
            it('zfaht is sorted to afhtz', function(){
                assert.equal('afhtz', sort('zfaht'));
            });
        });

        it('abc is permutation of cba', function(){
            assert.equal(true, isPermutation2('abc', 'cba'));
            assert.equal(true, isPermutation2('cba', 'abc'));
        });

        it('abc is not a permutation of ab', function(){
            assert.equal(false, isPermutation2('abc', 'ab'));
            assert.equal(false, isPermutation2('ab', 'abc'));
        });

        it('abc is not a permutation of def', function(){
            assert.equal(false, isPermutation2('abc', 'def'));
            assert.equal(false, isPermutation2('def', 'abc'));
        });

        it('aaa is a permutation of aaa', function(){
            assert.equal(true, isPermutation2('aaa', 'aaa'));
        });

        it('abc is not a permutation of null', function(){
            assert.equal(false, isPermutation2('abc', null));
            assert.equal(false, isPermutation2(null, 'abc'));
        });

        it('abc is not a permutation of 1', function(){
            assert.equal(false, isPermutation2('abc', 1));
            assert.equal(false, isPermutation2(1, 'abc'));
        });

        it('abc is not a permutation of empty string', function(){
            assert.equal(false, isPermutation2('abc', ''));
            assert.equal(false, isPermutation2('', 'abc'));
        });
    });
});

/** Linked Lists */
describe('Linked Lists', function(){
    it('Test linked list with 3 nodes', function(){
        
        var head = new Node('a');
        head.appendToTail('b');
        head.appendToTail('c');

        assert.equal('a->b->c->null', head.toListString());
    });

    it('Test linked list with null data', function(){
        
        var head = new Node(null);
        head.appendToTail(null);

        assert.equal('null->null->null', head.toListString());
    });

    it('Should remove nodes', function(){
        
        var head = new Node('a');
        head.appendToTail('b');
        head.appendToTail('c');

        assert.equal('a->c->null', head.removeNode('b').toListString());
    });

    it('Should not remove nodes', function(){
        
        var head = new Node('a');
        head.appendToTail('b');
        head.appendToTail('c');

        assert.equal('a->b->c->null', head.removeNode('z').toListString());
    });

    describe('Exercise 2.1 - Solution 1', function(){

        it('should remove duplicates (last node)', function(){
            
            var head = new Node('a');
            head.appendToTail('a');

            assert.equal(head.toListString(), 'a->a->null');

            head.removeDuplicates();

            assert.equal(head.toListString(), 'a->null');
        });

        it('should remove several duplicates', function(){
            
            var head = new Node('z');
            head.appendToTail('z');
            head.appendToTail('b');
            head.appendToTail('c');
            head.appendToTail('c');

            assert.equal('z->z->b->c->c->null', head.toListString());

            head.removeDuplicates();

            assert.equal('z->b->c->null', head.toListString());
        });

        it('should not remove any node (there are no duplicates)', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal('a->b->c->null', head.toListString());
            head.removeDuplicates();

            assert.equal('a->b->c->null', head.toListString());
        });
    });

    describe('Exercise 2.1 - Solution 2', function(){

        it('should remove duplicates (last node)', function(){
            
            var head = new Node('a');
            head.appendToTail('a');

            assert.equal(head.toListString(), 'a->a->null');

            head.removeDuplicates2();

            assert.equal(head.toListString(), 'a->null');
        });

        it('should remove duplicates (third node)', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('a');
            head.appendToTail('c');

            assert.equal(head.toListString(), 'a->b->a->c->null');

            head.removeDuplicates2();

            assert.equal(head.toListString(), 'a->b->c->null');
        });

        it('should not remove duplicates', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal(head.toListString(), 'a->b->c->null');

            head.removeDuplicates2();

            assert.equal(head.toListString(), 'a->b->c->null');
        });
    });

    describe('Exercise 2.2', function(){

        it('should find the k=1 to last node', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal(head.findKthToLast(0).getData(), 'c');
        });

        it('should find the first node', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal(head.findKthToLast(100).getData(), 'a');
        });

        it('should return null as k < 0', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal(head.findKthToLast(-1), null);
        });
    });

    describe('Exercise 2.3', function(){

        it('delete a node of a singly linked list given only access to the node', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            var node = head.appendToTail('c');
            head.appendToTail('d');
            head.appendToTail('e');

            assert.equal(head.toListString(), 'a->b->c->d->e->null');

            deleteNode(node);

            assert.equal(head.toListString(), 'a->b->d->e->null');
        });

        it('should not do anything due to invalid input node', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');
            head.appendToTail('d');
            var node = head.appendToTail('e');

            assert.equal(head.toListString(), 'a->b->c->d->e->null');

            deleteNode(node);

            assert.equal(head.toListString(), 'a->b->c->d->e->null');
        });
    });

    describe('Exercise 2.4', function(){

        it('partition two linked lists on value', function(){

            var head = new Node(2);
            head.appendToTail(5);
            head.appendToTail(1);
            head.appendToTail(7);
            head.appendToTail(3);

            assert.equal(head.partition(5), '2->1->3->null 5->7->null');
        });

        it('do not partition if value is higher than the maximum', function(){

            var head = new Node(2);
            head.appendToTail(5);
            head.appendToTail(1);
            head.appendToTail(7);
            head.appendToTail(3);

            assert.equal(head.partition(10), '2->5->1->7->3->null');
        });

        it('do not partition if value is lower than the minimum', function(){

            var head = new Node(2);
            head.appendToTail(5);
            head.appendToTail(1);
            head.appendToTail(7);
            head.appendToTail(3);

            assert.equal(head.partition(0), '2->5->1->7->3->null');
        });
    });

    describe('Exercise 2.5', function(){

        it('sum digits from two linked lists', function(){

            var head1 = new Node(7);
            head1.appendToTail(1);
            head1.appendToTail(6);

            var head2 = new Node(5);
            head2.appendToTail(9);
            head2.appendToTail(2);

            assert.equal(sumDigitsLL(head1, head2).toListString(), '2->1->9->null');
        });

        it('sum digits from linked lists with different amount of nodes', function(){

            var head1 = new Node(1);

            var head2 = new Node(5);
            head2.appendToTail(9);
            head2.appendToTail(2);

            assert.equal(sumDigitsLL(head1, head2).toListString(), '6->9->2->null');
        });

        it('does not sum as one head is null', function(){
            assert.equal(sumDigitsLL(new Node(1), null).toListString(), '1->null');
        });

        it('does not sum as one head is null', function(){
            assert.equal(sumDigitsLL(null, new Node(2)).toListString(), '2->null');
        });

        it('return null as both linked list heads are null', function(){
            assert.equal(sumDigitsLL(null, null), null);
        });
    });

    describe('Exercise 2.6', function(){

        it('find node from circular linked list', function(){

            var head = new Node('A');
            head.appendToTail('B');
            var nodeC = head.appendToTail('C');
            head.appendToTail('D');
            head.appendToTail('E');
            head.appendNodeToTail(nodeC);

            assert.equal(head.findLoopNode(), 'C');
        });

        it('do nothing if the linked list is not circular', function(){

            var head = new Node('A');
            head.appendToTail('B');
            head.appendToTail('C');
            head.appendToTail('D');
            head.appendToTail('E');

            assert.equal(head.findLoopNode(), null);
        });
    });

    describe('Exercise 2.7 - Solution 1', function(){

        it('is palindrome', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('a');

            assert.equal(head.isPalindrome(), true);
        });

        it('is not palindrome', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal(head.isPalindrome(), false);
        });

        it('single node is palindrome', function(){
            
            var head = new Node('a');

            assert.equal(head.isPalindrome(), true);
        });

        it('only same beginning and end is not palindrome', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');
            head.appendToTail('d');
            head.appendToTail('a');

            assert.equal(head.isPalindrome(), false);
        });
    });

    describe('Exercise 2.7 - Solution 2', function(){

        it('is palindrome', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('a');

            assert.equal(head.isPalindrome2(), true);
        });

        it('is not palindrome', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal(head.isPalindrome2(), false);
        });

        it('single node is palindrome', function(){
            
            var head = new Node('a');

            assert.equal(head.isPalindrome2(), true);
        });

        it('only same beginning and end is not palindrome', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');
            head.appendToTail('d');
            head.appendToTail('a');

            assert.equal(head.isPalindrome2(), false);
        });
    });
});

/** Linked Lists */
describe('Binary trees', function(){
    it('Binary Tree with 3 nodes', function(){
        
        var root = new Root(8);
        root.add(3);
        root.add(10);

        assert.equal(root.toString(), "8,3,10");
    });

    it('Binary Tree with 9 nodes', function(){
        
        var root = new Root(8);
        root.add(3);
        root.add(10);
        root.add(1);
        root.add(6);
        root.add(4);
        root.add(7);
        root.add(14);
        root.add(13);

        assert.equal(root.toString(), "8,3,1,6,4,7,10,14,13");
    });
});