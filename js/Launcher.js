class Launcher
{
	constructor(x,y)
	{ var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        lenght:10
    }
	this.pointB = pointB;
    this.launch = Constraint.create(options);
    World.add(world,this.launch);	

	}
	display(){
	var pointA = this.launch.bodyA.position;
    var pointB = pointB;
        stokeWeight(4);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
			
	}

}