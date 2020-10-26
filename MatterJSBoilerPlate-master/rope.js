class rope{
    constructor(bodyA, bodyB ){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:7,
            stiffness:-1,
        }

        this.body = Matter.Constraint.create(options);
        World.add(world,this.body);
    }

    display(){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.bodyB.position;
        strokeWeight(3);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}