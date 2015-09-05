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

        assert.equal('a->b->c->null', head.toString());
    });

    it('Test linked list with null data', function(){
        
        var head = new Node(null);
        head.appendToTail(null);

        assert.equal('null->null->null', head.toString());
    });

    it('Should remove nodes', function(){
        
        var head = new Node('a');
        head.appendToTail('b');
        head.appendToTail('c');

        assert.equal('a->c->null', head.removeNode('b'));
    });

    it('Should not remove nodes', function(){
        
        var head = new Node('a');
        head.appendToTail('b');
        head.appendToTail('c');

        assert.equal('a->b->c->null', head.removeNode('z'));
    });

    describe('Exercise 2.1 - Solution 1', function(){

        it('should remove duplicates (last node)', function(){
            
            var head = new Node('a');
            head.appendToTail('a');

            assert.equal(head.toString(), 'a->a->null');

            head.removeDuplicates();

            assert.equal(head.toString(), 'a->null');
        });

        it('should remove several duplicates', function(){
            
            var head = new Node('z');
            head.appendToTail('z');
            head.appendToTail('b');
            head.appendToTail('c');
            head.appendToTail('c');

            assert.equal('z->z->b->c->c->null', head.toString());

            head.removeDuplicates();

            assert.equal('z->b->c->null', head.toString());
        });

        it('should not remove any node (there are no duplicates)', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal('a->b->c->null', head.toString());
            head.removeDuplicates();

            assert.equal('a->b->c->null', head.toString());
        });
    });

    describe('Exercise 2.1 - Solution 2', function(){

        it('should remove duplicates (last node)', function(){
            
            var head = new Node('a');
            head.appendToTail('a');

            assert.equal(head.toString(), 'a->a->null');

            head.removeDuplicates2();

            assert.equal(head.toString(), 'a->null');
        });

        it('should remove duplicates (third node)', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('a');
            head.appendToTail('c');

            assert.equal(head.toString(), 'a->b->a->c->null');

            head.removeDuplicates2();

            assert.equal(head.toString(), 'a->b->c->null');
        });

        it('should not remove duplicates', function(){
            
            var head = new Node('a');
            head.appendToTail('b');
            head.appendToTail('c');

            assert.equal(head.toString(), 'a->b->c->null');

            head.removeDuplicates2();

            assert.equal(head.toString(), 'a->b->c->null');
        });
    });

    describe('Exercise 2.2 - Solution 1', function(){

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
});