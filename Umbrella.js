class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.image=loadImage("Walking/walking_1.png");
        this.body=Bodies.circle(x,y,50,options)
        this.radius=50;
        World.add(world,this.body)
    }
    display(){
        var Pos=this.body.position
        imageMode(CENTER);
        image(this.image,Pos.x,Pos.y+50,200,200);
    }
    
}