class Game{
constructor(){

}
//update the gameState in the DB (when playerCount become 4)
updateState(s){
    var dbref=database.ref("/"); 
    //to go to the location  in the DB
    //to do the work in the DB -->saving --.set or .update
    dbref.update({
    gameState:s 
    });
}

//to get the gameState value from the DB
getState(){
   var dbref=database.ref("gameState")
    dbref.on("value",function (r){
gameState=r.val()
    })

}


//what should happen at the beginning
start(){
if(gameState===0){
player = new Player();
player.getPlayerCount(); //to fil;l the playerCount global variable at the beginning of the game

form = new Form();
form.display(); //to display the form at the beginning of the game

}
}

play(){

    form.hide();
    textSize(30);
    text("Game Has Begun",100,100)

    Player.getPlayersInfo()

    if(allplayers!=undefined){

        var yPos = 150;
        for (var plr in allplayers){

            text(allplayers[plr].name+ ":" + allplayers[plr].distance,100,yPos )
            yPos+=50;
        }


    }

if(keyDown(UP_ARROW)){
    player.distance +=50;
    player.update();
}

}



}