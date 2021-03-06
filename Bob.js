class Bob {
    constructor(x, y, radius){
        var options = {
            'isStatic':false,
            'restitution':1,
            'friction':0,
            'density':1.2
        };
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("pink")
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}