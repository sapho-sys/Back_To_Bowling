const assert = require('assert');

const BallingGame = require('../controller/balling_factory');

describe('Balling Game', function(){
    const ballingAlley = BallingGame();
    it('The player should be able to make an unsuccessful roll & earn 0 in points', function(){
        ballingAlley.PlayGame('');
        assert.equal(0,ballingAlley.GetScore());
    });

    it('The player should be able to make a successful strike & earn at least 10 points', function(){
        ballingAlley.PlayGame('X');
        assert.equal(10, ballingAlley.GetScore());
    });

    it('The player should be able to make two successful strikes & earn at least 40 points', function(){
        ballingAlley.PlayGame('XX');
        assert.equal(40, ballingAlley.GetScore());
    });
    // it('The player should be able to make two successful strikes & earn at least 40 points', function(){
    //     ballingAlley.PlayGame('/');
    //     assert.equal(1, ballingAlley.GetScore());
    // })



    // it('The player should be able to see their score for that game', function(){

    // })

    // it('The player should be able to see their scores for each roll they made & also see their Total score for their overall game',function(){

    // })
})