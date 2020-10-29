class Ground{
    constructor(){
        var option={
            'isStatic':true
        }
    this.body=Bodies.rectangle(591,236,247,10,option);
    this.width=247;
    this.height=10;
    World.add(world,this.body);
    }
    display(){
      var  pos=this.body.position;
        fill(0);
rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}