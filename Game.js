class Game {
    constructor(){
        this.gravity = createVector(0,6)
    }

    checkWallCollisions(){

    }

    init(){
        this.maze = new Maze(numRows, numCols, cellSize, paddingLeft, paddingTop)
        this.maze.initCells()
        this.maze.generate()
        this.ball = new MazeBall(this.maze.cells[0])
    }

    render(){
        if(this.maze.cells != undefined){
            this.maze.render()
            this.ball.render()
        }

    }

    update(){
        this.ball.move()
        this.checkWallCollisions()
    }
}