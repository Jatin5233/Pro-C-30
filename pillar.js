class Pillar{
constructor(x,y,width,height){
    var options={
        'isStatic':true
    }
    this.image1=loadImage("pillar.png");
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.visibility=255;
   World.add(world,this.body);
   
}
display(){
    if(this.body.speed<3){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image1,0,0,this.width,this.height);
        pop();
  
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image1,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
  }
}