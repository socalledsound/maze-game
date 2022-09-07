const canvasWidth = 400, canvasHeight = 400
const numCols = 10
const numRows = 10
const cellSize = 40
let cells = []
let current
let cellCount = 0
let stack = []

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    frameRate(10)
    for(let y = 0; y < numCols; y++){
        for(let x = 0; x < numRows; x++){
            cells.push(new Cell(cellCount, x , y, cellSize))
            cellCount ++
        }
    }
    current = cells[0]
}

function draw(){
    background(20)
    //getNeighbors()
    //console.log(current)
    if(current != -1){
        
        const next = current.checkNeighbors()
        //console.log(neighbor)
        if(next !== -1){
            stack.push(current)
            next.visited = true
            console.log(next)
            next.highlight()
            
            removeWalls(current, next)
            //console.log(current.walls)

            // move on
            current = next
           
        } else if(stack.length > 1) {
            console.log(stack.length)
            stack.pop()
            current = stack[stack.length - 1]
            
            //stack.slice(-1, 0)
        }else{
            current.highlight()
            console.log('finished')
            noLoop()
            
        }
    }
   
    cells.forEach(cell => {
            cell.render()
    })
    
    
}