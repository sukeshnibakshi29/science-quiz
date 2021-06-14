class Security {

    constructor(){

          this.title = createElement('h1')

        this.access1 = createInput("Enter your name Here.........")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton("Class 8");
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

       
        
    }

    hide(){
        this.access1.hide()
     this.button1.hide()
      this.title.hide()
    }

    display(){

        this.title.html(" Science Quiz Game ");
        this.title.position(350, 0);  
        
        /*this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
               
           }
        });*/

       
    }
}