class paper{
    constructor(x,y){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:0.1
    }
    this.body = Bodies.circle(x,y,70,options)
    this.radius = 70;
    this.image=loadImage("paper.png")
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    push()
    translate (pos.x,pos.y)
    imageMode(RADIUS);
    fill("white");
    image(this.image,40,40,70,70);
    pop()
}
}
