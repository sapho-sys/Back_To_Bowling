/*
TODO
# arrange pins
# add lane
# drag ball
# throw ball
# force/direction indicator
# knock down pins
# strike message
*/

let BALL_DRAG = false;

let BALL_START_X = 0;
let BALL_START_Y = 0;
let BALL_END_X = 0;
let BALL_END_Y = 0;
let FORCE = 0;

const ball = document.getElementById("ball");
const guide = document.getElementById("guide");
const pins = document.querySelectorAll(".pin");
const message = document.getElementById("message");


const handleGrab = (event) => {
    BALL_DRAG = true;
    BALL_START_X = event.pageX;
    BALL_START_Y = event.pageY;
    console.log(ball.style.top);
}

const handleDragBall = (event) => {
    if (!BALL_DRAG) return;

    let mouseX = event.pageX;
    let mouseY = event.pageY;
    ball.style.top = mouseY - 30 + 'px';
    ball.style.left = mouseX - 30 + 'px';

    BALL_END_X = event.pageX;
    BALL_END_Y = event.pageY;

    adjustGuide()
}

const handleThrowBall = () => {
    BALL_DRAG = false;
    console.log(BALL_START_X, BALL_END_X, BALL_START_Y, BALL_END_Y)
    let { angle_rad } = angleCalc();

    setInterval(() => {
        ball.style.top = parseInt(ball.style.top) - Math.cos(angle_rad) * 10 + 'px';
        ball.style.left = parseInt(ball.style.left) - Math.sin(angle_rad) * 10 + 'px';
        ball.classList.add("roll");
    }, 2000/FORCE)

    setTimeout(()=>{
        for (let i = 0; i < pins.length; i++){
            pins[i].classList.add("fall"); 
        }
        message.classList.remove("hidden")
    },1000)
}

const angleCalc = () => {
    let adj = BALL_END_Y - BALL_START_Y;
    let opp = BALL_END_X - BALL_START_X;
    let tan = opp / adj;
    let angle_rad = Math.atan(tan);
    FORCE = Math.sqrt(Math.pow(opp,2)+ Math.pow(adj,2)) 

    calc = {
        adj,
        angle_rad
    }

    return calc;
}

const adjustGuide = () => {
    let { adj, angle_rad } = angleCalc();
    guide.style.height = adj + 'px';
    guide.style.transform = `perspective(100px) rotate(${-angle_rad}rad) rotateX(${adj/5}deg)`
}

ball.addEventListener('pointerdown', handleGrab)
ball.addEventListener('pointerup', handleThrowBall)
document.addEventListener('pointermove', handleDragBall)