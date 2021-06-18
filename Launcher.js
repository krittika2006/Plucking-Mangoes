class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.lauch.bodyA){
            var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
   
}