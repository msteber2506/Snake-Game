

const canvas = document.querySelector("#mainWindow");

class Snake{
    segmentCount;
    xPos;
    yPos;
    size;
    constructor(segment,x,y,size){
        this.segmentCount = segment;
        this.xPos = x;
        this.yPos = y;
        this.size = size;
    }
    draw(ctx){
        for(let i = 0; i<this.segmentCount; i++){
            ctx.fillRect(this.xPos+i*snake.size,this.yPos,this.size,this.size);
        }
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



let snake = new Snake(3,0,0,20)

canvas.width = 1500;

canvas.style.backgroundColor = "white";

let canvasColor = canvas.style.backgroundColor;

let canvasWidth = canvas.width;

let canvasHeight = canvas.height;

const ctx = canvas.getContext("2d");

let playerColor = 'blue';

let speed = 1;

ctx.fillStyle = playerColor;

ctx.fillRect(snake.xPos,snake.yPos,snake.size,snake.size);

function moveRight(unit){
    if(snake.xPos+snake.size+unit>canvasWidth){
        snake.xPos = canvasWidth-snake.size;
    }
    else{snake.xPos+=unit;}
    snake.draw(ctx);
}

function moveLeft(unit){
    if(snake.xPos-unit<0){
        snake.xPos = 0;
    }
    else{snake.xPos-=unit;}
    snake.draw(ctx);
}

function moveDown(unit){
    if(snake.yPos+snake.size+unit>canvasHeight){
        snake.yPos = canvasHeight-snake.size;
    }
    else{snake.yPos+=unit;}
    snake.draw(ctx);

}

function moveUp(unit){
    if(snake.yPos-unit<0){
        snake.yPos = 0;
    }
    else{snake.yPos-=unit;}
    snake.draw(ctx);
}

let direction = 'right'; 

window.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key==="ArrowRight"){
        direction = 'right';
    }
    else if(e.key==="ArrowLeft"){
        direction = 'left';
    }
    else if(e.key==="ArrowDown"){
        direction = 'down';
    }
    else if(e.key==="ArrowUp"){
        direction = 'up';
    }
})

function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.draw(ctx);
    if(direction==='right'){
        moveRight(speed)
    }
    else if(direction==='left'){
        moveLeft(speed)
    }
    else if(direction==='up'){
        moveUp(speed)
    }
    else if(direction==='down'){
        moveDown(speed)
    }
    setTimeout(gameLoop,1);
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
