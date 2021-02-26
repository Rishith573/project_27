class Rope{
    constructor (bodyA, bodyB){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.5,
            length : 100
        };
        this.rope = Constraine.create(options);
        World.add(world, this.rope);
        console.log(this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        console.log(pointA, pointB);
        strokeWeight(0.5)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }

}