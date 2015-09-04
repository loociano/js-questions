var assert = require('assert');
var code = require('../01-strings/01');

describe('Strings', function(){
    describe('Exercise 1.1 - First Solution', function(){
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

    describe('Exercise 1.1 - Second Solution', function(){
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