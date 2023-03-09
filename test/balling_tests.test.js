const assert = require('assert');

const BallingGame = require('../controller/balling_factory');

describe('Sapho Nkunzi Bowling Game', function(){
    const ballingAlley = BallingGame();
    //first bowl
    it('The player should be able to make an unsuccessful bowl & earn 0 in points', function(){
        ballingAlley.PlayGame('');
        assert.equal(0,ballingAlley.GetScore());
    });

    //second bowl
    it('The player should be able to able to get 10 points if they hit a Spare', function(){
        ballingAlley.PlayGame('/');
        assert.equal(10, ballingAlley.GetScore());
    });
    
    //third bowl
    it('The player should be able to increase their score to 20 points if they hit a Strike', function(){
        ballingAlley.PlayGame('X');
        assert.equal(20, ballingAlley.GetScore());
    });

    //fourth bowl
    it('The player should be able to increase their score to 31 from the previous total received on the Strike', function(){
        ballingAlley.PlayGame('15');
        assert.equal(31, ballingAlley.GetScore());

    })
    it('The player should be able to increase their score to 42 from the previous total received on the Strike', function(){
        ballingAlley.PlayGame('15 21 20');
        assert.equal(42, ballingAlley.GetScore());

    })

    it('The player should be able to see the number of swings they have made in the bowling alley, which is 8 in this case',function(){
        ballingAlley.PlayGame('13');
        assert.equal(8, ballingAlley.GetCounter())

    })
})