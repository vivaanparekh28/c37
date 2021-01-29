var database;

var playerCount, gameState = 0;

var player,game,form;

var allplayers


function setup(){
  database = firebase.database();

  createCanvas(500,500);

  game = new Game();//to create the object of the game class
  game.getState(); //to get the gameState from the DB at the beginnning of the game
  game.start();


}

function draw(){
  if(playerCount===4){
    game.updateState(1);
    
  }
  if(gameState===1){
 
    clear();
    game.play();
   
  }
    
  
}

