## Back to Bowling Game

The game consists of 10 frames. In each frame the player has two rolls to knock 
down 10 pins. The score for the frame is the total number of pins knocked down, 
plus bonuses for strikes and spares.  

A spare is when the player knocks down all 10 pins in two rolls. The bonus for that 
frame is the number of pins knocked down by the next roll.  

A strike is when the player knocks down all 10 pins on his first roll. The frame is 
then completed with a single roll. The bonus for that frame is the value of the 
next two rolls.  

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra 
balls to complete the frame. However no more than three balls can be rolled in 
tenth frame. 


### `server-side unit testing`
[![Node.js CI](https://github.com/sapho-sys/Back_To_Bowling/actions/workflows/node.js.yml/badge.svg)](https://github.com/sapho-sys/Back_To_Bowling/actions/workflows/node.js.yml)


## Use the supplied Factory Function

Fork this repo into your GitHub acount. 

Then clone your own version of this repo into your local `project` folder.

Use the supplied factory function in `balling_factory.js` in your ExpressJS app.

Create a PostgreSQL database called `spaza_suggest` use the script in `001.db.sql` or do your own database setup.



Run these commands to install all dependencies & to run the tests

```
npm install
npm test
```

All the tests should pass on Github Action(NodeJS CI).

Don't start creating the web app if your tests are not passing. Get assistance & clarification if needed from the `mentors@projectcodex.co` before potentially blindly proceeding.

Create an `index.js` file for your ExpressJS web app.

## Factory function methods to use

Use the supplied factory function in the `balling_factory.js` to build the screens above. Note that it is an es6 module.


### Back to Bowling methods

The `Back to Bowling` factory function has these methods for the Bowling Alley.

Method name | Description of method
-------|-----------

`void roll(int) ` | called each time the player rolls a ball. The argument is the 
number of pins knocked down
`int score() ` | returns the total score for that game
`void simulatePlayer()` | simulates a single players rolls randomly 
generate the pins he knocks down and print the results in a table format

