class ball {
  constructor (x,y,diameter){
    var options = {
        isStatic : true, 
        'restitution':0.8,
        'friction':1.0,
        'density':1.0


                }
    this.body = Bodies.circle(x, y, diameter, options);
    this.diameter = diameter;
    World.add(world, this.body);
  }
  display(){
    ellipseMode(CENTER);
    circle(this.body.position.x,this.body.position.y , this.diameter);
   
    
}
  }
  