class Bob
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':1.0,
            'isStatic':false,
            'friction':0,
            'density':0.9,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
     
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        fill(249,9,249);
        stroke("yellow");
        strokeWeight(4);
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}