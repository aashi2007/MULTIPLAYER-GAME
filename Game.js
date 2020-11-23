class Game
{
    constructor()
    {

    }
    getState()
    {
       var gameStateref = database.ref('gameState')
       //create a listener and read the data through a anonymous function
       gameStateref.on("value",function(data)
       {
           gameState = data.val();
       });
       
    }
    update(state)
    {
        database.ref('/').update
        ({
            gameState:state
        });
    }
    async start()
    {
        if(gameState === 0)
        {
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value")
            if(playerCountref.exists()){
                playerCount= playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
 play()
 {
    form.hide();
    text("Game Start", 200, 200);
    Player.getPlayerInfo();
    if(allPlayers !== undefined)
    {
        var display_position = 150;
        for(var plr in allPlayers)
        {
            if(plr === "player" + playerIndex)
            {
                fill("red");
            }
            else
            {
                fill("black");
            }
            display_position = display_position +20;
            textSize(15);
            text(allPlayers[plr].name + "=" + allPlayers[plr].distance,150, display_position)
        }
    }        
  }    
}