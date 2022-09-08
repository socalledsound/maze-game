class MazeBall {
    constructor(cell){
        this.pos = createVector(cell.x + cellSize/2, cell.y + cellSize/2)
        this.r = cellSize/2
        this.velocity = createVector(0,0)
        this.fillCol = [40,210,130]

    }

    move(){
        console.log(game.gravity)
        this.pos.add(game.gravity)
    }

    render(){
        fill(this.fillCol)
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}