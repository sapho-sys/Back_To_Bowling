const assert = require('assert');

const BallingGame = require('../controller/balling_factory');

describe('Sapho Nkunzi Bowling Game', function(){
    const ballingAlley = BallingGame();
    //first bowl
    it('The player should be able to make an unsuccessful bowl & earn 0 in points', function(){
        ballingAlley.PlayGame('');
        console.log('Score =>', ballingAlley.GetScore());
        assert.deepEqual([0,0],ballingAlley.GetScore());
    });
    //second bowl
    it('The player should be able to able to get 10 points if they hit a Spare', function(){
        ballingAlley.PlayGame('/');
        console.log('Score =>', ballingAlley.GetScore());
        assert.deepEqual([0,0,10,10], ballingAlley.GetScore());
    });
    //third bowl
    it('The player should be able to increase their score to 20 points if they hit a Strike', function(){
        ballingAlley.PlayGame('X');
        console.log('Score =>', ballingAlley.GetScore());
        assert.deepEqual([0,0,10,10,20,20], ballingAlley.GetScore());
    });
    //fourth bowl
    it('The player should be able to increase their score to 31 from the previous total received on the Strike', function(){
        ballingAlley.PlayGame('15');
        console.log('Score =>', ballingAlley.GetScore());
        assert.deepEqual([0,0,10,10,20,20,31,31], ballingAlley.GetScore());
    })
    //Bowl fifth - seventh
    it('The player should be able to increase their score to 42 from the previous total received on the Strike', function(){
        ballingAlley.PlayGame('11');
        console.log('Score =>', ballingAlley.GetScore());
        assert.deepEqual([0,0,10,10,20,20,31,31,34,34], ballingAlley.GetScore());
    })
    //Bowl 8 display in counter
    it('The player should be able to see the number of swings they have made in the bowling alley, which is 8 in this case',function(){
        ballingAlley.PlayGame('13');
        console.log('Counter =>', ballingAlley.GetCounter());
        assert.equal(9, ballingAlley.GetCounter())
    });    
})