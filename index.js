
let game

let theta = 0
function setup(){
    createCanvas(canvasWidth, canvasHeight)
    // frameRate(10)
    game = new Game()
    game.init()

}

function draw(){
    background(20)
   game.update()
    push()
        
        translate(width/2, height/2)
        rotate(theta)
        translate(-width/2, -height/2)
        game.render()
    pop()
    
    if(keyIsPressed){
        if(keyCode === LEFT_ARROW){
            theta -= 0.05
        }else if(keyCode == RIGHT_ARROW){
            theta += 0.05
        }
    }    
    
}
