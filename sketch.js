

var database ;
var form , game , question
function setup(){


    database = firebase.database();
    createCanvas(500,500);
    
game = new Game()


}

function draw(){

game.showQuestion()
    //form.display()


}