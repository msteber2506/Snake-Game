
const canvas = document.querySelector("#mainWindow");

class Snake{

    xPos;
    yPos;
    size;
    direction;

    constructor(x,y,size,direction){
        this.xPos = x;
        this.yPos = y;
        this.size = size;
        this.direction = direction;
    }

    draw(ctx){
            ctx.fillRect(this.xPos,this.yPos,this.size,this.size);
        }
    
    moveRight(unit){
        if(this.xPos+this.size+unit>canvasWidth){
            this.xPos = canvasWidth-this.size;
        }
        else{this.xPos+=unit;}
    }
 
    moveLeft(unit){
        if(this.xPos-unit<0){
            this.xPos = 0;
        }
        else{this.xPos-=unit;}
    }

    moveDown(unit){
        if(this.yPos+this.size+unit>canvasHeight){
            this.yPos = canvasHeight-this.size;
        }
        else{this.yPos+=unit;}
    
    }

    moveUp(unit){
        if(this.yPos-unit<0){
            this.yPos = 0;
        }
        else{this.yPos-=unit;}
    }
}

class Food{
    xPos;
    yPos;
    size;
    constructor(x,y,size){
        this.xPos = x;
        this.yPos = y;
        this.size = size;
    }
    
    draw(ctx){
        ctx.fillRect(this.xPos,this.yPos,this.size,this.size);
    }
}

let snakes = [];  

for(let i =0; i<2;i++){                                // Initilalize snakes here
    let snake = new Snake(600-i*20,50,20,'right');
    snakes.push(snake);
}

//**** Adjust canvas and snake properties below! ****//
canvas.width = 1500;

canvas.style.backgroundColor = "black";

let canvasColor = canvas.style.backgroundColor;

let canvasWidth = canvas.width;

let canvasHeight = canvas.height;

const ctx = canvas.getContext("2d");

let snakeColor = '#00FF00';

let snakeSize = 20;

let speed = snakeSize;  // Speed is the distance the snake moves in each frame. Measured in pixels.

ctx.fillStyle = snakeColor;

let mainDirection = 'right'; // Main direction is the direction the head of snake is moving. 

let snakeIsMoving = true;

//*************************************************//


function turnLoop(i,dir){
    snakes[i].direction = dir;
    if(i<snakes.length){
        setTimeout(turnLoop,30, i+1 ,dir)}
    }

window.addEventListener('keydown',function(e){
    if(e.key==="ArrowRight" && mainDirection!=='left'){
        mainDirection = 'right';
    }
    else if(e.key==="ArrowLeft" && mainDirection!=='right'){
        mainDirection = 'left';
    }
    else if(e.key==="ArrowDown" && mainDirection!=='up'){
        mainDirection = 'down';
    }
    else if(e.key==="ArrowUp" && mainDirection!=='down'){
        mainDirection = 'up';
        }
    turnLoop(0,mainDirection);
})

function hitBorder(){
    if(snakes[0].xPos ===0 || snakes[0].yPos ===0 || snakes[0].yPos === canvasHeight-snakeSize || snakes[0].xPos === canvasWidth-snakeSize){
        return true;
    }
}

function intersect(){
    console.log("placeholder")
}








function gameLoop(){  // Main game loop

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(hitBorder()){
        snakeIsMoving = false;
    }
    
    for(let snake of snakes){
        if(snakeIsMoving){
            if(snake.direction ==='right'){
                snake.moveRight(speed)
            }
            else if(snake.direction==='left'){
                snake.moveLeft(speed)
            }
            else if(snake.direction==='up'){
                snake.moveUp(speed)
            }
            else if(snake.direction==='down'){
                snake.moveDown(speed)
            }
        }
        snake.draw(ctx)
            
    }


    setTimeout(gameLoop,30);
}


gameLoop();



























// Unused Code

/*
window.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key==="ArrowRight"){
        moveRight(width);
    }
    else if(e.key==="ArrowLeft"){
        moveLeft(width);
    }
    else if(e.key==="ArrowDown"){
        moveDown(height);
    }
    else if(e.key==="ArrowUp"){
        moveUp(height);
    }
    else if(e.code==="Space"){
        removeAddTrace();
    }
})
*/
