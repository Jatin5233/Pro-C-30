class Catapult{
    constructor(bodyA, pointB){
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.02,
            'length': 10
        }

        this.pointB=pointB;
        this.catapult = Constraint.create(options);
        World.add(world, this.catapult);
    }

    
    fly(){
        this.catapult.bodyA=null;
    }
    attach(body){
        this.catapult.bodyA = body;
    }
    display(){
        if(this.catapult.bodyA!==null){
        var pointA = this.catapult.bodyA.position;
        var pointB =this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}