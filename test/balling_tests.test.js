const assert = require('assert');

const BallingGame = require('../controller/balling_factory');

describe('Sapho Nkunzi Bowling Game', function(){
    const ballingAlley = BallingGame();
    //first bowl
    it('The player should be able to make an unsuccessful bowl & earn 0 in points, 1 is a default value', function(){
        ballingAlley.PlayGame('');
        console.log('Score =>', ballingAlley.GetScore().slice(-1));
        assert.deepEqual([1],ballingAlley.GetScore().slice(-1));
    });
    //second bowl
    it('The player should be able to able to get 10 points if they hit a Spare', function(){
        ballingAlley.PlayGame('/');
        console.log('Score =>', ballingAlley.GetScore().slice(-1));
        assert.deepEqual([11], ballingAlley.GetScore().slice(-1));
    });
    //third bowl
    it('The player should be able to increase their score to 21 points if they hit a Strike', function(){
        ballingAlley.PlayGame('X');
        console.log('Score =>', ballingAlley.GetScore().slice(-1));
        assert.deepEqual([21], ballingAlley.GetScore().slice(-1));
    });
    //fourth bowl
    it('The player should be able to increase their score to 32 ', function(){
        ballingAlley.PlayGame('15');
        console.log('Score =>', ballingAlley.GetScore().slice(-1));
        assert.deepEqual([32], ballingAlley.GetScore().slice(-1));
    })
    //Bowl fifth - seventh
    it('The player should be able to increase their score to 35 ', function(){
        ballingAlley.PlayGame('11');
        console.log('Score =>', ballingAlley.GetScore().slice(-1));
        assert.deepEqual([35], ballingAlley.GetScore().slice(-1));
    })
    //Bowl 8 display in counter
    it('The player should be able to see the number of swings they have made in the bowling alley, which is 8 in this case',function(){
        ballingAlley.PlayGame('13');
        console.log('Counter =>', ballingAlley.roll());
        assert.equal(9, ballingAlley.roll())
    });    
})