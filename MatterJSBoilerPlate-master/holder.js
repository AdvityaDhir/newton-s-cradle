class Holder {
    constructor (x,y,height,angle){
        var options = {
            isStatic : true
                    }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
       
        
    }
    
}