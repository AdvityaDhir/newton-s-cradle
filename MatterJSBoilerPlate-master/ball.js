class ball {
    constructor(x,y){
      super(x,y,50,50);
    }
  
    display() {
      this.bodyA.position.x = mouseX;
      super.display();
    }
  }
  