const assert = require('assert');

const BallingGame = require('../controller/balling_factory');

describe('Balling Game', function(){
    const ballingAlley = BallingGame();
    it('The player should be able to make an unsuccessful roll & earn 0 in points', function(){
        ballingAlley.PlayGame('');
        assert.equal(0,ballingAlley.GetScore());
    });

   
    it('The player should be able to able to get 10 points if they hit a Spare', function(){
        ballingAlley.PlayGame('/');
        assert.equal(10, ballingAlley.GetScore());
    });

     it('The player should be able to increase their score to 20 points if they hit a Strike', function(){
        ballingAlley.PlayGame('X');
        assert.equal(20, ballingAlley.GetScore());
    });

    it('The player should be able to increase their score to 86 from the previous total received on the Strike', function(){
        ballingAlley.PlayGame('15 27 81 43 26 05 16 22 13 43');
        assert.equal(86, ballingAlley.GetScore());

    })

    // it('The player should be able to see their scores for each roll they made & also see their Total score for their overall game',function(){

    // })
})