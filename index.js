const canvasWidth = 600, canvasHeight = 600
const numRows = 10, numCols = 10
const cellSize = 50
const paddingLeft = 50
const paddingTop = 50
let maze

let theta = 0
function setup(){
    createCanvas(canvasWidth, canvasHeight)
    frameRate(10)
    //translate(50,50)
    maze = new Maze(numRows, numCols, cellSize, paddingLeft, paddingTop)
    maze.generate()
}

function draw(){
    background(20)
    //getNeighbors()
    //console.log(current)
    
   
    push()
        
        translate(width/2, height/2)
        rotate(theta)
        translate(-width/2, -height/2)
        maze.render()
    pop()
    
    if(keyIsPressed){
        if(keyCode === LEFT_ARROW){
            theta -= 0.05
        }else if(keyCode == RIGHT_ARROW){
            theta += 0.05
        }
    }    
    
}
