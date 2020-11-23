class Form
{
    constructor()
    {
        this.Input = createInput("Enter Name");
        this.Button = createButton("READY");
        this.Greeting = createElement('h3');
    }
 hide(){
     this.Input.hide();
     this.Button.hide();
     this.Greeting.hide();
 }
    display()
    {
           var title = createElement('h2');
           title.html("CAR CHASE");
           title.position(350, 0);    
           this.Input.position(350, 150);
           this.Button.position(350, 350);
          
           this.Button.mousePressed(()=>{
           this.Input.hide();
           this.Button.hide();
           player.name = this.Input.value();          
           playerCount = playerCount+1;
           player.update()
           player.updateCount(playerCount)
           this.Greeting.html("Hello"+player.name);
           this.Greeting.position(350, 200);
        })
    }


}


//to give heading createElement headings: h1 to h6
// to create textbox createInput
//to create button createButton