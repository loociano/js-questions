var assert = require('assert');
var code = require('../01-strings/01');

describe('Strings - Exercise 1.1', function(){
    describe('First Solution', function(){
        it('abc has unique characters', function(){
            assert.equal(true, code.hasAllUniqueCharacters('abc'));
        });
        
        it('aabbcc has duplicated characters', function(){
            assert.equal(false, code.hasAllUniqueCharacters('aabbcc'));
        });
        
        it('aaa has duplicated characters', function(){
            assert.equal(false, code.hasAllUniqueCharacters('aaa'));
        });

        it('string is null', function(){
            assert.equal(false, code.hasAllUniqueCharacters(null));
        });

        it('string is empty', function(){
            assert.equal(false, code.hasAllUniqueCharacters(''));
        });

        it('string contains invalid characters', function(){
            assert.equal(false, code.hasAllUniqueCharacters('my name'));
        });

        it('input is not a string', function(){
            assert.equal(false, code.hasAllUniqueCharacters(1));
        });

        it('input is NaN', function(){
            assert.equal(false, code.hasAllUniqueCharacters(NaN));
        });
    });

    describe('Second Solution', function(){
        it('abc has unique characters', function(){
            assert.equal(true, code.hasAllUniqueCharacters2('abc'));
        });
        
        it('aabbcc has duplicated characters', function(){
            assert.equal(false, code.hasAllUniqueCharacters2('aabbcc'));
        });
        
        it('aaa has duplicated characters', function(){
            assert.equal(false, code.hasAllUniqueCharacters2('aaa'));
        });

        it('string is null', function(){
            assert.equal(false, code.hasAllUniqueCharacters2(null));
        });

        it('string is empty', function(){
            assert.equal(false, code.hasAllUniqueCharacters2(''));
        });

        it('string contains invalid characters', function(){
            assert.equal(false, code.hasAllUniqueCharacters2('my name'));
        });

        it('input is not a string', function(){
            assert.equal(false, code.hasAllUniqueCharacters2(1));
        });

        it('input is NaN', function(){
            assert.equal(false, code.hasAllUniqueCharacters2(NaN));
        });
    });
});

var code2 = require('../01-strings/02');

describe('Strings - Exercise 1.2', function(){
    it('abc reverses to cba', function(){
        assert.equal('cba', code2.reverse('abc'));
    });

    it('aabb reverses to bbaa', function(){
        assert.equal('bbaa', code2.reverse('aabb'));
    });

    it('null reverses to null', function(){
        assert.equal(null, code2.reverse(null));
    });

    it('empty string reverses to empty string', function(){
        assert.equal('', code2.reverse(''));
    });

    it('a non string returns the same value', function(){
        assert.equal(1, code2.reverse(1));
    });
});