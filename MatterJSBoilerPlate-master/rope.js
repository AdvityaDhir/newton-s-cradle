class rope{
    constructor(bodyA, bodyB, bodyC, bodyD, bodyE){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            bodyC:bodyC,
            bodyD:bodyD,
            bodyE:bodyE,
            length:7,
            stiffness:-1,
        }

        this.body=Constraint.create(options);
        World.add(world,this.body);
    }

    display(){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.bodyB.position;
        var pointC=this.body.bodyC.position;
        var pointD=this.body.bodyD.position;
        var pointE=this.body.bodyE.position;
        strokeWeight(3);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y, pointD.x, pointD.y, pointE.x, pointE.y);
    }
}