class Form{
constructor(){
    this.title = createElement('h1');
    this.input=createInput("Enter your name")
    this.button=createButton("PLAY");
    this.greeting = createElement('h1');
}

hide(){
this.input.hide();
this.button.hide();
this.title.hide();
this.greeting.hide();
}


display(){

//console.log("test")
//var title = createElement('h1');
this.title.html("Car Racing Game");
this.title.position(150,20);

//var input = createInput('Enter your Name');
this.input.position(250,80)

//var button=createButton("PLAY");
this.button.position(250,100);

this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()

    player.name = this.input.value();

    //we will increase the playerCount variable by 1 and then save that in the DB
    playerCount+=1;
    player.index = playerCount;

    //to update the DB with the players name
    //we will write a fnction to do that - in the Player.js
    player.update();


    //to save the playerCount in the DB we will write a function --> Player.js

    player.updateCount(playerCount);

    //to show the greeting message to the player while waiting 
    
    this.greeting.html("Hello "+player.name + " Wait for the others");
    this.greeting.position(100,150);


})


}

}