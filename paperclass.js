class Paper{
    constructor(x,y,r){
        this.body=Bodies.circle(this.x,this.y,this.r/2,{isStatic:true});
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        fill("yellow");
        //ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        ellipse(50,50,10,10);
    }
};